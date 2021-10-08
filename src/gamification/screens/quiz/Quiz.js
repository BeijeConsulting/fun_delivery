import { Component } from "react"

import musicQuiz from "../../assets/sounds/musicQuiz.mp3"
import rightQuiz from "../../assets/sounds/rightQuiz.mp3"
import wrongQuiz from "../../assets/sounds/wrongQuiz.mp3"
import win from "../../assets/sounds/win.mp3"
import lose from "../../assets/sounds/lose.wav"


import './Quiz.css'
import '../../../common/components/ui/button/Button.css'
import Button from "../../../common/components/ui/button/Button"
import GeneralModal from '../../components/funcComponents/generalModal/GeneralModal'
import HeaderGamePage from "../../components/funcComponents/headerGamePage/HeaderGamePage"
import ModalReaction from "../../components/ui/modalReaction/ModalReaction"
import MoneyCascade from "../../components/classComponents/moneycascade/MoneyCascade"
import Coin from "./../../assets/images/beijeCoin.png";
import Tear from './../../assets/images/tear.svg';
import i18n from "../../../common/localization/i18n"
import { withTranslation } from "react-i18next"

class Quiz extends Component {

    constructor(props) {
        super(props)

        this.quiz = i18n.t('gamification.screens.quiz.quizArray', { returnObjects: true });
        console.log('SINGLE OBJ: ' ,this.quiz)
        let storage = JSON.parse(localStorage.getItem('userInfo'))

        this.loading = true
        this.singleObj = this.getRndQuestion(this.quiz)
        
        this.state = {
            storage: storage === null ? [] : storage,
            quizData: this.quiz,
            singleObjSt: this.singleObj,
            countQuestion: 0,
            right: false,
            chosenAnswer: '',
            counterWins: 0,
            buttonStyle: 'gm-quiz-button',
            iconButton: '',
            choiceDone: false,
            showLoader: false,
            beijeCoin: storage.userInfo.beijeCoin,
            translate: false
        }
    }
    
    componentDidMount() {
        // console.log('SINGLE OBJjjjjjjjj', this.singleObj)
        // console.log('quiz' , this.quiz)
        // console.log('quizData', this.quizProva)
        let audio = new Audio(musicQuiz);
        audio.volume = 1;
        audio.play();
        // document.addEventListener('click', this.handleClickButton);
        // console.log('sono componentDidMount')
        // console.log('COMPONENT DID MOUNT BEIJECOIN: ', this.state.beijeCoin)
        document.addEventListener('load', this.setTimeout);
        
    }
    componentDidUpdate(prevProps, prevState){
        console.log('STATO PRECEDENTE DI SINGLE OBJ: ', prevState.singleObjSt)
        this.prova = prevState.singleObjSt;
    }

    getRndQuestion(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }


    returnAnswer = (item, index) => {
        return <Button
            className='gm-quiz-button'
            key={index}
            callback={this.choose(item)}
            text={item} />
    }

    choose = (item) => () => {
        let chosenAnswer = item
        let right = false
        let counterWins = 0
        if (chosenAnswer === this.state.singleObjSt.answer) {
            right = true
            counterWins = 1
        }
        this.setState({
            chosenAnswer: chosenAnswer,
            right: right,
            counterWins: this.state.counterWins + counterWins,
            choiceDone: true,
            countQuestion: this.state.countQuestion + 1,
        })


        if (this.state.counterWins >= 1 && this.state.countQuestion === 2) {
            this.addCoins()
            this.setTime()
        }
        if (this.state.counterWins < 1 && this.state.countQuestion === 2) {
            this.setTime()
        }
    }


    findRightAnswer = (item, index) => {
        let buttonStyle = this.state.buttonStyle
        let iconButton = this.state.iconButton
        if (item === this.state.singleObjSt.answer) {
            buttonStyle = 'gm-quiz-button gm-quiz-button-answer gm-quiz-button-right'
            iconButton = '😃'
            if (this.state.showLoader === false && this.state.chosenAnswer === this.state.singleObjSt.answer) {
                let audio = new Audio(rightQuiz)
                audio.volume = 1
                audio.play()
            }
        }
        else if (item === this.state.chosenAnswer && this.state.chosenAnswer !== this.state.singleObjSt.answer) {
            buttonStyle = 'gm-quiz-button gm-quiz-button-answer gm-quiz-button-wrong'
            iconButton = '☹️'
            if (this.state.showLoader === false) {
                let audio = new Audio(wrongQuiz)
                audio.volume = 1
                audio.play()
            }
        }

        return <Button
            className={buttonStyle}
            key={index}
            callback={this.fintaFunction}
            text={item + '  ' + iconButton} />
    }



    goToNext = () => {
        let tempArray = this.state.quizData.filter((obj) => {
            return obj !== this.state.singleObjSt
        })

        console.log('tempArray', tempArray)

        let singleObjSt = this.getRndQuestion(tempArray)


        this.setState({
            quizData: tempArray,
            choiceDone: false,
            singleObjSt: singleObjSt,

        })

    }

    setTime = () => {
        if (this.loading) {
            setTimeout(() => {

                this.setTimeout = this.setState({ showLoader: true })
            }, 1000);
        }
    }




    resultModal = () => {
        if (this.state.counterWins >= 2) {
            let audio = new Audio(win)
            audio.volume = 1
            audio.play()
        } else {
            let audio = new Audio(lose)
            audio.volume = 1
            audio.play()
        }
        return (
            <GeneralModal
                contentModal={this.state.counterWins >= 2 ?
                    <ModalReaction cascadeMoney={<MoneyCascade svgCascade={Coin} />} textModal="Hai vinto" />
                    : <ModalReaction cascadeMoney={<MoneyCascade svgCascade={Tear} />} textModal='Mi dispiace, ma hai perso' />}
            />
        )
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


    handleClickButton = (e) => {
        i18n.changeLanguage(e.target.value);
        this.setState({
            singleObjSt: this.prova,
            translate: !this.state.translate
        })
    }
    render() {
        const { t } = this.props;
        return (
            <div className='gm-game-page-container' >
                
                <HeaderGamePage
                    infoMessage={t('gamification.screens.quiz.infoGame')}
                    iconContainerCss='gm-header-icon-container gm-game-header-page'
                />

                

                <div className='gm-quiz-container'>
                    <button onClick={this.state.translate === true && this.handleClickButton} style={{ width: '100px', height: '40px' }} value="it" >
                        it
                    </button>
                    <button onClick={this.state.translate === false && this.handleClickButton} style={{ width: '100px', height: '40px' }} value="en" >
                        en
                    </button>

                    <div className='gm-counter-questions'>

                        {this.state.countQuestion}/3

                    </div>

                    <div className='gm-quiz-container-question'>
                        {/* <p className='gm-question'>{this.state.singleObjSt.question}</p> */}
                        <p className='gm-question'>{this.state.singleObjSt.question}</p>

                    </div>

                    <div className="gm-quiz-container-answer">

                        {
                            this.state.choiceDone === false &&
                            this.state.singleObjSt.options.map(this.returnAnswer)
                        }

                        {
                            this.state.choiceDone &&
                            this.state.singleObjSt.options.map(this.findRightAnswer)
                        }


                    </div>
                    <div className="gm-avanti-container">
                        {
                            this.state.choiceDone && this.state.countQuestion < 3 &&
                            // <div className='gm-quiz-container-footer'>
                            <div>

                                <Button
                                    className='gm-goOn-button'
                                    callback={this.goToNext}
                                    text={'Avanti'} />
                            </div>

                        }
                    </div>
                </div>

                {
                    this.state.showLoader &&
                    this.resultModal()
                }

            </div >

        )
    }

}


export default withTranslation()(Quiz);