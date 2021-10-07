import { Component } from "react"

import './Quiz.css'
import '../../../common/components/ui/button/Button.css'
import Button from "../../../common/components/ui/button/Button"
import GeneralModal from '../../components/funcComponents/generalModal/GeneralModal'
import HeaderGamePage from "../../components/funcComponents/headerGamePage/HeaderGamePage"
import ModalReaction from "../../components/ui/modalReaction/ModalReaction"

class Quiz extends Component {

    constructor(props) {
        super(props)

        this.quiz = [
            {
                question: "Da dove deriva la poke?",
                options: ["Italia", "Francia", "Giappone", "Hawaii"],
                answer: "Hawaii",
            },
            {
                question: "Da dove deriva la pizza?",
                options: ["Italia", "Francia", "Giappone", "Hawaii"],
                answer: "Italia",

            },
            {
                question: "Da dove deriva il sushi?",
                options: ["Italia", "Francia", "Giappone", "Hawaii"],
                answer: "Giappone",

            }, {
                question: "Da dove deriva la carbonara?",
                options: ["Italia", "Francia", "Giappone", "Hawaii"],
                answer: "Italia",

            },
            {
                question: "Da dove deriva lo champagne?",
                options: ["Italia", "Francia", "Giappone", "Hawaii"],
                answer: "Francia",

            },
            {
                question: "Da dove deriva il ramen?",
                options: ["Italia", "Francia", "Giappone", "Hawaii"],
                answer: "Giappone",

            },

        ]

        this.loading = true
        this.singleObj = this.getRndQuestion(this.quiz)

        this.state = {
            quizData: this.quiz,
            singleObjSt: this.singleObj,
            countQuestion: 0,
            right: false,
            chosenAnswer: '',
            counterWins: 0,
            buttonStyle: 'gm-quiz-button',
            iconButton: '',
            choiceDone: false,
            showLoader: false
        }
    }

    componentDidMount() {
        document.addEventListener('load', this.setTimeout)
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
    }


    findRightAnswer = (item, index) => {
        let buttonStyle = this.state.buttonStyle
        let iconButton = this.state.iconButton
        if (item === this.state.chosenAnswer && this.state.chosenAnswer === this.state.singleObjSt.answer) {
            buttonStyle = 'gm-quiz-button gm-quiz-button-answer gm-quiz-button-right'
            iconButton = '😃'
        }
        else if (item === this.state.chosenAnswer && this.state.chosenAnswer !== this.state.singleObjSt.answer) {
            buttonStyle = 'gm-quiz-button gm-quiz-button-answer gm-quiz-button-wrong'
            iconButton = '☹️'
        }
        else if (item === this.state.singleObjSt.answer) {
            buttonStyle = 'gm-quiz-button gm-quiz-button-answer gm-quiz-button-right'
            iconButton = '😃'
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
        return (
            <GeneralModal
                // contentModal={this.state.counterWins >= 2 ? 'Hai vinto questa partita' : 'Hai perso questa partita'}
                contentModal = {this.state.counterWins >= 2 ? <ModalReaction/> : <ModalReaction textModal = 'Mi dispiace, ma hai perso' />}
            />
        )
    }

    render() {
        return (
            <div className='gm-game-page-container' >
                <div className='gm-game-header-page'>
                    <HeaderGamePage
                        infoMessage='Rispondi correttamente alle domande'
                        iconContainerCss='gm-header-icon-container'
                    />
                </div>

                <div className='gm-quiz-container'>


                    <p className='gm-counter-questions'>{this.state.countQuestion}/3</p>

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
                        {
                            this.state.choiceDone && this.state.countQuestion < 3 &&
                            <div className='gm-quiz-container-footer'>
                                <Button
                                    className='gm-goOn-button'
                                    callback={this.goToNext}
                                    text={'Avanti'} />
                            </div>
                        }

                    </div>
                </div>
                {
                    this.state.countQuestion > 2 &&
                    this.setTime()
                }
                {
                    this.state.showLoader &&
                    this.resultModal()
                }

            </div >

        )
    }

}


export default Quiz