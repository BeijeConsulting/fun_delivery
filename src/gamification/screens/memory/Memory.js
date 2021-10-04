import React, { Component } from 'react'
import './Memory.css'
import properties from '../../utilities/properties'

import Title from '../../components/funcComponents/title/Title.js'
import { HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';


class Memory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shuffle: false,
            memoryCardsPair: properties.memoryCardsPair
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
            }
        }, 1000)

    }

    render() {
        return (
            <div className='memory-page'>
                <div className='icons-container'>
                    <div className='info-icon'><InfoCircleOutlined />
                        <div className='info-message'>Trova le coppie uguali</div>
                    </div>
                <Title
                    className={"gm-title"}
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
                                        className={card.active ? 'card active' : "card wrong-front"} >
                                    </div>
                                    <div style={{ backgroundImage: `url(${card.name})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100%" }} className={card.active ? 'card-back active-back' : 'card-back wrong-back'} onClick={this.handleClickMemory(key)}></div>
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