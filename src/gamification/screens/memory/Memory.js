import React, { Component } from 'react'
import './Memory.css'
import properties from '../../utilities/properties'

import musicMemory from "../../assets/sounds/musicMemory.mp3"
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
import HeaderGamePage from '../../components/funcComponents/headerGamePage/HeaderGamePage';
import './../quiz/Quiz.css'
import Rider from './../../assets/images/memoryImg/rider.svg'
import i18n from '../../../common/localization/i18n';
import { withTranslation } from 'react-i18next';


class Memory extends Component {
    constructor(props) {
        super(props)

        let storage = JSON.parse(localStorage.getItem('userInfo'))

        this.state = {
            storage: storage === null ? [] : storage,
            shuffle: false,
            memoryCardsPair: properties.memoryCardsPair,
            winModal: false,
            loseModal: false,
            beijeCoin: storage.userInfo.beijeCoin,
        }
    }

    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
        this.setState({
            shuffle: true
        })
    }

    componentDidMount = () => {
/*         let audio = new Audio(musicMemory);
        audio.volume = 1;
        audio.play(); */
        
        this.shuffle(this.state.memoryCardsPair)
        this.countdown()
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
            //vinto

                let audio = new Audio(win)
                audio.volume = 1
                audio.play()
            this.addCoins()
        }

    }

    addCoins = () => {
        let beijeCoin = this.state.storage.userInfo.beijeCoin
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
        newMemoryCardsPair[key].active = true
        //qui suono carta che si gira
        let audio = new Audio(seeCardMemory);
        audio.volume = 1;
        audio.play();


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
                    // qui suono due carte uguali
                    let audio = new Audio(rightCardsMemory);
                    audio.volume = 1;
                    audio.play();
                } else {
                    newMemoryCardsPair.map(el => el.name === filteredCard[0].name || el.name === filteredCard[1].name ? el.active = false : el)
                    //qui suono due carte diverse
                    let audio = new Audio(wrongCardsMemory);
                    audio.volume = 1;
                    audio.play();
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
            //perso
            let audio = new Audio(lose)
            audio.volume = 1
            audio.play()
        }, 60000)

    }

    handleClickButton = (e) => {
        i18n.changeLanguage(e.target.value);
    }



    render() {
        const { t } = this.props

        return (
            <> 
                <div className='memory-page'>
                    <div className="gm-headerTitleContainer">

                        <HeaderGamePage

                            infoMessage={t('gamification.screens.memory.infoGame')}


                            iconContainerCss='gm-header-icon-container gm-game-header-page'
                        />
                        <div className='gm-flags-container'>

                            <button
                                onClick={this.handleClickButton}
                                style={{ width: '40px', height: '40px',
                                
                            }}
                                value="it" 
                                >
                                it
                            </button>
                            <button
                                onClick={this.handleClickButton}
                                style={{ width: '40px', height: '40px' }}
                                value="en" 
                                >
                                en
                            </button>
                        </div>
                    </div>

                    <div className="gm-flex-container">
                        <div className='gm-game-container'>
                            <div className="gm-rider-container">
                                <img className="gm-rider" src={Rider} alt="rider"></img>
                            </div>
                            <div className="gm-moving-street">

                            </div>
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