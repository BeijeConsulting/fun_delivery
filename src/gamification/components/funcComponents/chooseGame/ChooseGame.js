import "./ChooseGame.css"
import quiz from "../../../assets/images/chooseGame/Quiz.png"
import memory from "../../../assets/images/chooseGame/memory.png"
import i18n from "../../../../common/localization/i18n"
import { withTranslation } from "react-i18next"
import { Link } from "react-router-dom"
const ChooseGame = (props) => {
    const { t } = props;
    const clickQuiz = () => () => {
        props.history.push("/quiz")
    }
    const clickMemory = () => () => {
        props.history.push("/memory")
    }
    return (
        <div className="gm-choosegame-container">
            {/* {t('gamification.components.chooseGame.title')} */}
            <h1 className="gm-choose-title">Gioca con noi</h1>
            {/* {t('gamification.components.chooseGame.subtitle')} */}
            <p className="gm-choosegame-container-p">Gioca con noi in attesa del tuo ordine e guadagna i beijecoins per comprare dei nuovi avatar!</p>
            <div className='gm-choosegame-container-game'>
                <Link to="/quiz">
                    <div onClick={clickQuiz} className="gm-choosegame-img" ><img src={quiz} alt="quiz" width="100%" /></div>
                </Link>
                <Link to="/memory">
                    <div onClick={clickMemory} className="gm-choosegame-img" ><img src={memory} alt="memory" width="100%" /></div>
                </Link>
            </div>
        </div>
    )
}
export default withTranslation()(ChooseGame);