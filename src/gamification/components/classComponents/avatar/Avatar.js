import './Avatar.css';
import { CloseOutlined } from '@ant-design/icons';
import { Component } from 'react';
import properties from '../../../utilities/properties.js'
import { get } from 'lodash'

import coin from '../../../../common/assets/BeijeCoin.png'

import Button from '../../../../common/components/ui/button/Button.js'

import shelf from '../../../assets/images/badges/white_shelf.png'

class Avatar extends Component {
  constructor(props) {
    super(props)

    this.difference = null

    this.userPath = JSON.parse(localStorage.getItem('userInfo'))



    this.state = {

      gamification: properties.gamification,

      avatar_list: properties.avatar_list,
      badge_list: properties.badge_list,

      avatarDetailModal: false,
      avatarDetail: null,
      avatar_page: true,
      selectedBadge: this.userPath.badge.selectedBadge,
    }
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

  avatarDetailModal = (key) => () => {
    if (get(this.userPath.avatar, "userAvatars").includes(key)) {
      this.userPath.avatar.selectedAvatar = key
      localStorage.setItem('userInfo', JSON.stringify(this.userPath))
    }
    this.setState({
      avatarDetailModal: true,
      avatarDetail: key,
    })
  }

  closeAvatarDetailModal = () => {
    this.setState({
      avatarDetailModal: false
    })

    this.difference = null
  }

  buyAvatar = () => {

    this.difference = this.userPath.beijeCoin - this.state.avatar_list[this.state.avatarDetail].cost

    if (this.difference > -1) {
      this.userPath.beijeCoin = this.difference
      this.userPath.avatar.userAvatars.push(this.state.avatarDetail)
      this.userPath.avatar.selectedAvatar = this.state.avatarDetail
    }

    this.setState({
      avatarDetailModal: this.difference > -1 ? false : true
    })

    localStorage.setItem('userInfo', JSON.stringify(this.userPath))

  }

  
  clickSelectedBadge = (key) =>() =>{
   if(this.userPath.badge.userBadges.includes(key)){
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
          style={this.state.selectedBadge === key ? {filter: "drop-shadow(2px 2px 4px green)"} : null}
          className={this.userPath.badge.userBadges.includes(key) ? `badge-icon` : "badge-icon badges-not-owned"}><img  onClick={this.clickSelectedBadge(key)} src={badge.image} alt={'badge'} /></div>
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
            <div className='gm-current-coins'>{this.userPath.beijeCoin}<img className='coin-avatar-image' src={coin} alt={'coins'} /></div>
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
                    <div className={get(this.userPath.avatar, "selectedAvatar") !== key ? 'avatar-icon' : 'avatar-icon avatar-icon-selected'}><img onClick={this.avatarDetailModal(key)} src={avatar.image} alt={'avatar'} /></div>
                    {
                      this.userPath.avatar.userAvatars.includes(key) !== true &&
                      <div className='avatar-cost'>{avatar.cost}<img src={coin} alt={'price'} /></div>
                    }
                  </div>
                )
              })}
            </div>
          }
          {
            this.state.avatarDetailModal && get(this.userPath.avatar, "userAvatars").includes(this.state.avatarDetail) !== true &&
            <div className="avatar-detail-modal">
              <CloseOutlined onClick={this.closeAvatarDetailModal} className='gm-close-icon close-avatar-detail' />
              <div className="avatar-selected-content">
                <img className={"avatar-detail-img"} src={this.state.avatar_list[this.state.avatarDetail].image} alt='detail-avatar' />

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

export default Avatar;