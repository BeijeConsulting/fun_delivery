import React, { Component } from 'react'
import './Memory.css'
import properties from '../../utilities/properties'

/* import musicMemory from "../../assets/sounds/musicMemory.mp3" */
import Title from '../../components/funcComponents/title/Title.js'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import GeneralModal from '../../components/funcComponents/generalModal/GeneralModal';
import ModalReaction from '../../components/ui/modalReaction/ModalReaction';
import MoneyCascade from '../../components/classComponents/moneycascade/MoneyCascade';
import Coin from "./../../assets/images/beijeCoin.png";
import Tear from './../../assets/images/tear.svg';
import HeaderGamePage from '../../components/funcComponents/headerGamePage/HeaderGamePage';
import './../quiz/Quiz.css'
import Rider from './../../assets/images/memoryImg/rider.svg'
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
            beijeCoin: storage.userInfo.beijeCoin
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

    // ONCLICK SET STATE OF CARD OBJ TRUE AND CHECK IF 2 CARDS SELECTED ARE EQUALS OF NOT, IF EQUALS REMOVE CARDS FROM ARRAY, ELSE RESET THE STATE TO FALSE

    handleClickMemory = (key) => () => {


        // SET ACTIVE TRUE ON SELECTED ELEMENT
        let newMemoryCardsPair = this.state.memoryCardsPair
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
                } else {
                    newMemoryCardsPair.map(el => el.name === filteredCard[0].name || el.name === filteredCard[1].name ? el.active = false : el)
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
        }, 60000)
    }




    render() {
        return (
            <>
                <div className='memory-page'>
                    <div className="gm-headerTitleContainer" style={{ height: '80px', border: '3px solid gold' }}>

                        <HeaderGamePage

                            infoMessage='Trova la coppia di carte uguale'
                            iconContainerCss='gm-header-icon-container gm-game-header-page'
                        />
                    </div>
                    {/* <Title
                        className={"gm-title"}
                        label={'Memory'}
                        color={'white'}
                        fontWeight={'bold'}
                    /> */}

                    <div className="gm-flex-container">
                        <div className='gm-game-container'>
                            <div className="gm-rider-big-container">

                                <div className='gm-countdown-container'>
                                    <div className='gm-front-countdown'></div>
                                </div>
                                <div className="gm-rider-container">
                                    <img className="Rider" src={Rider} alt="rider"></img>
                                </div>
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

export default Memory;