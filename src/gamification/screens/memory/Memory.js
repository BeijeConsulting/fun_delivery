import React, { Component } from 'react'
import './Memory.css'
import properties from '../../utilities/properties'

// import musicMemory from "../../assets/sounds/musicMemory.mp3"
import rightCardsMemory from "../../assets/sounds/rightCardsMemory.mp3"
import wrongCardsMemory from "../../assets/sounds/wrongCardsMemory.mp3"
import seeCardMemory from "../../assets/sounds/seeCardsMemory.mp3"
import win from "../../assets/sounds/win.mp3"
import lose from "../../assets/sounds/lose.wav"

import GeneralModal from '../../components/funcComponents/generalModal/GeneralModal';
import ModalReaction from '../../components/ui/modalReaction/ModalReaction';
import MoneyCascade from '../../components/classComponents/moneycascade/MoneyCascade';
import Coin from "./../../assets/images/beijeCoin.png";
import Tear from './../../assets/images/tear.svg';
import treeSheet from '../../assets/images/memoryImg/tree-sheet.png'
import HeaderGamePage from '../../components/funcComponents/headerGamePage/HeaderGamePage';
import './../quiz/Quiz.css'
import Rider from './../../assets/images/memoryImg/rider.png'
import i18n from '../../../common/localization/i18n';
import { withTranslation } from 'react-i18next';


class Memory extends Component {
    constructor(props) {
        super(props)

        let storage = JSON.parse(localStorage.getItem('userInfo'))
        this.audioWin = new Audio(win)
        this.audioSeeCardMemory = new Audio(seeCardMemory);
        this.audioRightCardsMemory = new Audio(rightCardsMemory);
        this.audioWrongCardsMemory = new Audio(wrongCardsMemory);
        this.audioLose = new Audio(lose)

        this.state = {
            storage: storage === null ? [] : storage,
            shuffle: false,
            memoryCardsPair: properties.memoryCardsPair,
            winModal: false,
            loseModal: false,
            beijeCoin: storage.beijeCoin,
            audio: true,
            countSec: 60
        }
    }

    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
        this.setState({
            shuffle: true
        })
    }

    componentDidMount = () => {
        this.shuffle(this.state.memoryCardsPair)
        this.countdown()
        this.timer = setInterval(this.showCountdown, 1000)
    }

    endgame = (value) => {
        let tempArray = value
        let newTempArray = tempArray.filter((item) => {
            return item === false
        })
        if (newTempArray.length === 12) {
            this.setState({
                winModal: true
            })
            if (this.state.audio) {
                this.audioWin.play()
            }
            this.addCoins()
        }
    }

    addCoins = () => {
        let beijeCoin = this.state.storage.beijeCoin
        beijeCoin = beijeCoin + 5

        let tempObj = this.state.storage

        for (let key in tempObj.userInfo) {
            if (key === 'beijeCoin') {
                tempObj.userInfo[key] = beijeCoin;
            }
        }
        this.setState({
            storage: localStorage.setItem('userInfo', JSON.stringify(tempObj))
        })
    }

    handleClickMemory = (key) => () => {
        // SET ACTIVE TRUE ON SELECTED ELEMENT
        let newMemoryCardsPair = this.state.memoryCardsPair
        if (newMemoryCardsPair[key].active === false) {
            if (this.state.audio) {
                this.audioSeeCardMemory.play();
            }
        }
        newMemoryCardsPair[key].active = true

        // ADD SELECTED ELEMENT TO A NEW ARRAY
        let filteredCard = newMemoryCardsPair.filter(card => card.active === true)

        this.setState({
            memoryCardsPair: newMemoryCardsPair
        })

        // CHECK IF 2 CARDS IN FILTERED ARE EQUALS OR NOT AND SET A NEW STATE 
        setTimeout(() => {
            if (filteredCard.length > 1) {
                if (filteredCard[0].name === filteredCard[1].name) {
                    let cardsRemove = newMemoryCardsPair.map(el =>
                        el.name === filteredCard[0].name ? el.visible = false : el
                    )
                    newMemoryCardsPair = cardsRemove
                    if (this.state.audio) {
                        this.audioRightCardsMemory.play();
                    }
                } else {
                    newMemoryCardsPair.map(el => el.name === filteredCard[0].name || el.name === filteredCard[1].name ? el.active = false : el)
                    if (this.state.audio) {
                        this.audioWrongCardsMemory.play();
                    }
                }

                // FILTERED RESET WAITING NEW COMPARE
                filteredCard = [];

                this.setState({
                    memoryCardsPair: newMemoryCardsPair
                })
                this.endgame(newMemoryCardsPair)
            }
        }, 1000)
    }

    countdown = () => {
        setTimeout(() => {
            this.setState({
                loseModal: true
            })
            if (this.state.audio) {
                this.audioLose.play()
            }
        }, 60000)
    }

    showCountdown = () => {
        if (this.state.countSec !== 0) {
            this.setState({
                countSec: this.state.countSec - 1
            })
        }
    }

    handleClickButton = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    callbackAudioButton = () => {
        this.setState({
            audio: !this.state.audio
        })
    }

    render() {
        const { t } = this.props

        return (
            <>
                <div className='memory-page'>

                    <div className="gm-headerTitleContainer">
                        <HeaderGamePage
                            infoMessage={t('gamification.screens.memory.infoGame')}
                            state={this.state.audio}
                            callbackAudioButton={this.callbackAudioButton}
                            iconContainerCss='gm-header-icon-container gm-game-header-page'
                        />
                    </div>

                    <div className="gm-flex-container">
                        <div className='gm-game-container'>

                            <div className="gm-rider-container">
                                <img className="gm-rider" src={Rider} alt="rider"></img>
                            </div>

                            <div className='gm-moving-street-tree-container'>
                                <div className='gm-moving-street-tree'><img src={treeSheet} alt={'three-sheet'} /></div>
                            </div>

                            <div className='gm-moving-street-container'>
                                <div className="gm-moving-street"></div>
                            </div>
                            <div className='gm-countdown-memory'>
                                {
                                    this.state.countSec === 60 &&
                                    <p>01:00</p>
                                }
                                {
                                    this.state.countSec < 60 && this.state.countSec >= 10 &&
                                    <p>00:{this.state.countSec}</p>
                                }
                                {
                                    this.state.countSec < 10 &&
                                    <p>00:0{this.state.countSec}</p>
                                }
                            </div>

                            <div className='gm-memory-card-container'>
                                {this.state.memoryCardsPair.map((card, key) => {
                                    return (
                                        <div style={card.visible ? { opacity: '1' } : { animationName: "disappear", animationDuration: "1s" }} className="card-container" key={key}>
                                            <div
                                                key={key}
                                                className={card.active ? 'card active' : "card wrong-front"} >
                                            </div>
                                            <div style={{ backgroundImage: `url(${card.name})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100%" }} className={card.active ? 'card-back active-back' : 'card-back wrong-back'} onClick={this.handleClickMemory(key)}></div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.winModal &&
                    <GeneralModal
                        contentModal={<ModalReaction cascadeMoney={<MoneyCascade svgCascade={Coin} />} textModal="Hai vinto" />}
                    />
                }
                {
                    this.state.loseModal && this.state.winModal === false &&
                    <GeneralModal
                        contentModal={<ModalReaction cascadeMoney={<MoneyCascade svgCascade={Tear} />} textModal='Mi dispiace, ma hai perso' />}
                    />
                }
            </>
        )
    }
}

export default withTranslation()(Memory);