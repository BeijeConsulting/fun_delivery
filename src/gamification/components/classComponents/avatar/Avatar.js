import React from 'react';
import './Avatar.css';
import { CloseOutlined } from '@ant-design/icons';
import { Component } from 'react';
import properties from '../../../utilities/properties.js'
import propertiesCommon from '../../../../common/utils/properties'
import genericServices from '../../../../common/utils/genericServices'
import { get } from 'lodash'
import { connect } from 'react-redux';
import buyAvatarBadge from "../../../assets/sounds/buyAvatarBadge.mp3"
import coin from '../../../../common/assets/BeijeCoin.png'
import Button from '../../../../common/components/ui/button/Button.js'
import shelf from '../../../assets/images/badges/white_shelf.png'


class Avatar extends Component {
  constructor(props) {
    super(props)
    this.difference = null
    this.userPath = JSON.parse(localStorage.getItem('userInfo'))
    this.state = {
      dataUser: null,
      error: false,
      gamification: properties.gamification,
      avatar_list: [],
      avatar_owned: [],
      badge_list: [],
      badge_owned: [],
      avatarDetailModal: false,
      avatarDetail: null,
      avatar_page: true,
      badgeSelected: null,
      avatarSelected: null
    }
  }

  componentDidMount = () => {
    this.getDataApi()
  }

  getDataApi = async () => {

    let errorToSave = false
    propertiesCommon.GENERIC_SERVICE = new genericServices()

    let dataUser = await propertiesCommon.GENERIC_SERVICE.apiGET(`/user/${this.props.userIdDuck.userID}`, this.props.tokenDuck.token)
    let avatarSelected = await propertiesCommon.GENERIC_SERVICE.apiGET(`/avatar/detail/${dataUser.avatarId}`, this.props.tokenDuck.token)
    let avatarListAPI = await propertiesCommon.GENERIC_SERVICE.apiGET("/avatars", this.props.tokenDuck.token)
    let avatarsOwned = await propertiesCommon.GENERIC_SERVICE.apiGET(`/avatar_user/${this.props.userIdDuck.userID}`, this.props.tokenDuck.token)
    let avatarsOwnedId = avatarsOwned.map(el => el = el.avatarId)

    let badgeListAPI = await propertiesCommon.GENERIC_SERVICE.apiGET("/badges", this.props.tokenDuck.token)
    let badgeSelected = await propertiesCommon.GENERIC_SERVICE.apiGET(`/badge/detail/${dataUser.badgeId}`, this.props.tokenDuck.token)
    let badgeOwned = await propertiesCommon.GENERIC_SERVICE.apiGET(`/badge_user/${this.props.userIdDuck.userID}`, this.props.tokenDuck.token)
    let badgeOwnedId = badgeOwned.map(el => el = el.badgeId)

    // console.log(badgeSelected)

    let statusCode = get(avatarListAPI, "status", null)
    if (statusCode === "401") {
      errorToSave = true; //deve dare un errore
    }
    this.setState({
      dataUser: dataUser,
      avatar_list: avatarListAPI,
      badge_list: badgeListAPI,
      error: errorToSave,
      avatar_owned: avatarsOwnedId,
      avatarSelected: avatarSelected,
      badge_owned: badgeOwnedId,
      badgeSelected: badgeSelected
    })
  }

  avatarPageRedirect = () => {
    if (!this.state.avatar_page) {
      this.setState({
        avatar_page: true
      })
    }
  }

  badgePageRedirect = () => {
    if (this.state.avatar_page) {
      this.setState({
        avatar_page: false
      })
    }
  }

  avatarDetailModal = (key) => async () => {
    console.log(this.state.avatar_owned.includes(key + 1), "MUCCAAAAA")
    let avatarDetailModal = true
    let avatarSelected = this.state.avatarSelected
    if (this.state.avatar_owned.includes(key + 1)) {
      let obj = {
        userId: this.props.userIdDuck.userID,
        avatarId: key + 1
      }
      avatarSelected = key
      await propertiesCommon.GENERIC_SERVICE.apiPUT(`/avatar_user/select`, obj, this.props.tokenDuck.token)
      avatarDetailModal = false
      await this.getDataApi()
    }
    console.log(avatarDetailModal)
    this.setState({
      avatarDetailModal: avatarDetailModal,
      avatarDetail: key,
      avatarSelected: avatarSelected
      
    })
  }

  closeAvatarDetailModal = () => {
    this.setState({
      avatarDetailModal: false
    })

    this.difference = null
  }

  buyAvatar = async () => {
    let avatarDetails = await propertiesCommon.GENERIC_SERVICE.apiGET(`/avatar/detail/${this.state.avatarDetail + 1}`, this.props.tokenDuck.token)

    this.difference = this.state.dataUser.totalCoins - avatarDetails.cost
    let avatarSelected = this.state.avatarDetail
    if (this.difference > -1) {
      let obj = {
        avatarId: avatarDetails.id,
        userId: this.props.userIdDuck.userID
      }
      console.log(obj, "OBJJJJJJ");
      await propertiesCommon.GENERIC_SERVICE.apiPOST(`/avatar_user/insert`, obj, this.props.tokenDuck.token)

      await propertiesCommon.GENERIC_SERVICE.apiPUT(`/avatar_user/select`, obj, this.props.tokenDuck.token)
      avatarSelected = obj.avatarId
      await this.getDataApi()
      let audio = new Audio(buyAvatarBadge)
      audio.volume = 0.1
      audio.play()
    }
    this.setState({
      avatarDetailModal: this.difference > -1 ? false : true,
      avatarDetail: avatarSelected,
      avatarSelected: avatarSelected-1
    })
  }


  clickSelectedBadge = (key) => () => {
    if (this.userPath.badge.userBadges.includes(key)) {
      this.userPath.badge.selectedBadge = key
      localStorage.setItem('userInfo', JSON.stringify(this.userPath))

      let newSelectedBadge = this.userPath.badge.selectedBadge

      this.setState({
        selectedBadge: newSelectedBadge
      })
    }
  }

  printBadge = (badge, key) => {
    return (
      <div key={key} className='badge-page-container'>
        <div className='badge-icon-container'>
          <div
            // style={this.state.selectedBadge === key ? {filter: "drop-shadow(2px 2px 4px green)"} : null}
            // className={this.userPath.badge.userBadges.includes(key) ? `badge-icon` : "badge-icon badges-not-owned"}
            className="badge-icon"
          >
            <img onClick={this.clickSelectedBadge(key)} src={badge.path} alt={'badge'} /></div>
        </div>
      </div>
    )
  }

  closeHandleClick = () => {
    this.props.closeCallback()
  }

  render() {
    return (
      <div className='avatar-page-container'>
        <div className='avatar-container'>
          <div className='gm-icons-container'>
            <div className='gm-current-coins'>{get(this.state.dataUser, "totalCoins")}<img className='coin-avatar-image' src={coin} alt={'coins'} /></div>
            <CloseOutlined className='gm-close-icon' onClick={this.closeHandleClick} />
          </div>
          <div className='links-container'>
            <span className={this.state.avatar_page ? 'selected' : undefined} onClick={this.avatarPageRedirect}>Avatar</span>
            <span>|</span>
            <span className={!this.state.avatar_page ? 'selected' : undefined} onClick={this.badgePageRedirect}>Badge</span>
          </div>
          {
            this.state.avatar_page &&
            <div className='avatar-list-container'>
              {this.state.avatar_list.map((avatar, key) => {
                return (
                  <div key={key} className='avatar-icon-container'>
                    <div
                      className='avatar-icon'
                      className={this.state.avatarSelected !== key ? 'avatar-icon' : 'avatar-icon avatar-icon-selected'}
                    >
                      <img onClick={this.avatarDetailModal(key)} src={avatar.path} alt={'avatar'} /></div>
                    {
                      this.state.avatar_owned.includes(key + 1) !== true &&
                      <div className='avatar-cost'>{avatar.cost}<img src={coin} alt={'price'} /></div>
                    }
                  </div>
                )
              })}
            </div>
          }
          {
            this.state.avatarDetailModal &&
            <div className="avatar-detail-modal">
              <CloseOutlined onClick={this.closeAvatarDetailModal} className='gm-close-icon close-avatar-detail' />
              <div className="avatar-selected-content">
                <img className={"avatar-detail-img"} src={this.state.avatar_list[this.state.avatarDetail].path} alt='detail-avatar' />

                <div className='toast-container'>
                  <div className='modal-avatar-cost'>{this.state.avatar_list[this.state.avatarDetail].cost}<img src={coin} alt={'price'} />
                  </div>
                  {this.difference < 0 &&
                    <div className="avatar-toast">
                      BeijeCoins insufficienti, povero!
                    </div>
                  }
                </div>
                <div className="buttons-avatar-modal">
                  <Button text={"Annulla"}
                    callback={this.closeAvatarDetailModal} />
                  <Button text={"Acquista"}
                    callback={this.buyAvatar} />
                </div>
              </div>
            </div>
          }
          {
            !this.state.avatar_page &&
            <>
              <div className='badge-list-container'>
                {this.state.badge_list.map(this.printBadge)}
              </div>

              {
                this.state.badge_list.map((badge, key) => {
                  return (key + 1) % 3 === 0 &&
                    (
                      <div key={key} className='badge-shelf'><img src={shelf} alt='shelf' /></div>
                    )
                })
              }
            </>
          }


        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tokenDuck: state.tokenDuck,
  restaurantIdDuck: state.restaurantIdDuck,
  userIdDuck: state.userIdDuck
})

export default connect(mapStateToProps)(Avatar);