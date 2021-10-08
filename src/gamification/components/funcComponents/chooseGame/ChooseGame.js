import "./ChooseGame.css"
import quiz from "../../../assets/images/chooseGame/Quiz.png"
import memory from "../../../assets/images/chooseGame/memory.png"
import i18n from "../../../../common/localization/i18n"
import { withTranslation } from "react-i18next"
const ChooseGame = () => {
    const { t }  = this.props;
    return (
        <div className="gm-choosegame-container">
            {/* {t('gamification.components.chooseGame.title')} */}
            <h1>Gioca con noi</h1>
            {/* {t('gamification.components.chooseGame.subtitle')} */}
            <p className="gm-choosegame-container-p">Gioca con noi in attesa del tuo ordine e guadagna i beijecoins per comprare dei nuovi avatar!</p>
            <div className='gm-choosegame-container-game'>
                <div className="gm-choosegame-img" ><img src={quiz} alt="quiz" width="100%" /></div>
                <div className="gm-choosegame-img" ><img src={memory} alt="memory" width="100%" /></div>
            </div>
        </div>
    )
}
export default withTranslation()(ChooseGame);