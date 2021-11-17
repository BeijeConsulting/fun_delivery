import { Component } from "react"

import musicQuiz from "../../assets/sounds/musicQuiz.mp3"
import rightQuiz from "../../assets/sounds/rightQuiz.mp3"
import wrongQuiz from "../../assets/sounds/wrongQuiz.mp3"
import win from "../../assets/sounds/win.mp3"
import lose from "../../assets/sounds/lose.wav"
import { Link } from "react-router-dom"

import propertiesGS from '../../../common/utils/properties'
import genericServices from "../../../common/utils/genericServices";
import { connect } from 'react-redux'

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
import ChooseGame from "../../components/funcComponents/chooseGame/ChooseGame"
import HeaderModalX from "../../components/funcComponents/headerModalX/HeaderModalX"

class Quiz extends Component {

    constructor(props) {
        super(props)

        this.quiz = i18n.t('gamification.screens.quiz.quizArray', { returnObjects: true });
        let storage = JSON.parse(localStorage.getItem('userInfo'))

        this.loading = true
        this.singleObj = this.getRndQuestion(this.quiz)

        this.audioRightQuiz = new Audio(rightQuiz)
        this.audioWrongQuiz = new Audio(wrongQuiz)
        this.audioWin = new Audio(win)
        this.audioLose = new Audio(lose)
        this.audio = new Audio(musicQuiz);

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
            beijeCoin: storage.beijeCoin,
            translate: false,
            audio: false,
            chooseGame: false,
        }
    }

    componentDidMount() {
        // console.log('SINGLE OBJjjjjjjjj', this.singleObj)
        // console.log('quiz' , this.quiz)
        // console.log('quizData', this.quizProva)
        /*         let audio = new Audio(musicQuiz);
                audio.volume = 0.2;
                audio.play(); */
        // document.addEventListener('click', this.handleClickButton);
        // console.log('sono componentDidMount')
        // console.log('COMPONENT DID MOUNT BEIJECOIN: ', this.state.beijeCoin)
        document.addEventListener('load', this.setTimeout);

    }
    // componentDidUpdate(prevProps, prevState){
    //     console.log('STATO PRECEDENTE DI SINGLE OBJ: ', prevState.singleObjSt)
    //     this.prova = prevState.singleObjSt;
    // }


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
                if (this.state.audio) {
                    this.audioRightQuiz.play()
                    this.audioRightQuiz.volume = 0.1;

                }
            }
        }
        else if (item === this.state.chosenAnswer && this.state.chosenAnswer !== this.state.singleObjSt.answer) {
            buttonStyle = 'gm-quiz-button gm-quiz-button-answer gm-quiz-button-wrong'
            iconButton = '☹️'
            if (this.state.showLoader === false) {
                if (this.state.audio) {
                    this.audioWrongQuiz.play()
                    this.audioWrongQuiz.volume = 0.1;
                }
            }
        }
        return <Button
            className={buttonStyle}
            key={index}
            callback={this.fakeFunction}
            text={item + '  ' + iconButton} />
    }

    fakeFunction = () => {
        return null
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

    redirect = () => {
        this.audio.pause()
        this.audioWin.pause()
        this.audioLose.pause()
        return (
            <Link to="/orderConfirmed" />
        )
    }

    chooseGameCallback = () => {
        this.audio.pause()
        this.setState({
            chooseGame: true,
        })
    }

    resultModal = () => {
        if (this.state.counterWins >= 2) {
            if (this.state.audio) {
                this.audioWin.play()
                this.audioWin.volume = 0.1;
            }
        } else {
            if (this.state.audio) {
                this.audioLose.play()
                this.audioLose.volume = 0.1;
            }
        }
        return (
            <GeneralModal
                contentModal={this.state.counterWins >= 2 ?
                    <ModalReaction callback={this.redirect} chooseGameCallback={this.chooseGameCallback} cascadeMoney={<MoneyCascade svgCascade={Coin} />} textModal={i18n.t('gamification.components.quiz.ModalReactionWin')} />
                    : <ModalReaction callback={this.redirect} chooseGameCallback={this.chooseGameCallback} cascadeMoney={<MoneyCascade svgCascade={Tear} />} textModal={i18n.t('gamification.components.quiz.ModalReactionLose')} />}
            />
        )
    }

    addCoins = async() => {
/*         let beijeCoin = this.state.storage.beijeCoin
        beijeCoin = beijeCoin + 5

        let tempObj = this.state.storage

        for (let key in tempObj.userInfo) {
            if (key === 'beijeCoin') {
                tempObj.userInfo[key] = beijeCoin;
            }
        }
        this.setState({
            storage: localStorage.setItem('userInfo', JSON.stringify(tempObj))
        }) */
        propertiesGS.GENERIC_SERVICE = new genericServices()
        await propertiesGS.GENERIC_SERVICE.apiPOST('/minigame/beijecoin/163', {}, this.props.tokenDuck.token)
    }




    callbackAudioButton = () => {
        this.setState({
            audio: !this.state.audio
        })
        if (this.state.audio === false) {
            this.audio.volume = 0.04;
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    render() {
        const { t } = this.props;
        return (
            <div className='gm-game-page-container' >

                <HeaderGamePage
                    infoMessage={t('gamification.screens.quiz.infoGame')}
                    iconContainerCss='gm-header-icon-container gm-game-header-page'
                    callbackAudioButton={this.callbackAudioButton}
                    state={this.state.audio}
                />



                <div className='gm-quiz-container'>
                    <div className='gm-counter-questions'>

                        {this.state.countQuestion}/3

                    </div>

                    <div className='gm-quiz-container-question'>
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
                            <div>

                                <Button
                                    className='gm-goOn-button'
                                    callback={this.goToNext}
                                    text={t('gamification.components.quiz.goNext')} />
                            </div>

                        }
                    </div>
                </div>

                {
                    this.state.showLoader &&
                    this.resultModal()
                }
                {
                    this.state.chooseGame &&
                    <GeneralModal
                        contentModal={<ChooseGame />} />
                }

            </div >

        )
    }

}


const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
})
export default connect(mapStateToProps)(withTranslation()(Quiz));