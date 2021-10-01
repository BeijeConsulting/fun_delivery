import React, { Component } from 'react'
import './Memory.css'

import burger from "../../assets/burger.png"
import chinese from "../../assets/chinese.png"
import dessert from "../../assets/dessert.png"
import pizza from "../../assets/pizza.png"
import poke from "../../assets/poke.png"
import sushi from "../../assets/sushi.png"

import logo from "../../assets/logo_beije.svg"
import Title from '../../components/func_components/title/Title.js'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';


class Memory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shuffle: false,
            memoryCardsPair: [
                { name: burger, active: false, visible: true },
                { name: chinese, active: false, visible: true },
                { name: dessert, active: false, visible: true },
                { name: poke, active: false, visible: true },
                { name: pizza, active: false, visible: true },
                { name: sushi, active: false, visible: true },
                { name: burger, active: false, visible: true },
                { name: chinese, active: false, visible: true },
                { name: dessert, active: false, visible: true },
                { name: poke, active: false, visible: true },
                { name: pizza, active: false, visible: true },
                { name: sushi, active: false, visible: true }
            ]
        }
    }

    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
        this.setState({
            shuffle:true
        })
      }

      componentDidMount=()=>{
            this.shuffle(this.state.memoryCardsPair)
      }
      
    // ONCLICK SET STATE OF CARD OBJ TRUE AND CHECK IF 2 CARDS SELECTED ARE EQUALS OF NOT, IF EQUALS REMOVE CARDS FROM ARRAY, ELSE RESET THE STATE TO FALSE

    handleClick = (card, key) => () => {

   
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
                    console.log(newMemoryCardsPair)
                }

                // FILTERED RESET WAITING NEW COMPARE
                filteredCard = [];

                this.setState({
                    memoryCardsPair: newMemoryCardsPair
                })
            }
        }, 1000)
        console.log(this.state.memoryCardsPair)
    }

    render() {
        return (
            <div className='memory-page'>
                <div className='icons-container'>
                    <div className='info-icon'><InfoCircleOutlined />
                        <div className='info-message'>Trova le coppie uguali</div>
                    </div>
                <Title
                    className={"title"}
                    label={'Memory'}
                    color={'white'}
                    fontWeight={'bold'}
                    />
                    <HomeOutlined className='info-icon'/>
                    </div>

                <div className="flex-container">
                    <div className='game-container'>
                        <div></div>
                        {this.state.memoryCardsPair.map((card, key) => {
                            return (
                                <div style={card.visible ? { opacity: '1' } : { animationName: "disappear", animationDuration: "1s" }} className="card-container" key={key}>
                                    <div
                                        key={key}
                                        className={card.active ? 'card active' : "card wrong-front"} onClick={(this.handleClick(card, key))}>
                                    </div>
                                    <div style={{ backgroundImage: `url(${card.name})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100%" }} className={card.active ? 'card-back active-back' : 'card-back wrong-back'}></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="general-container">
                </div>
            </div>
        )
    }
}

export default Memory;