import "./ChooseGame.css"
import quiz from "../../../assets/images/chooseGame/Quiz.png"
import memory from "../../../assets/images/chooseGame/memory.png"
import { withTranslation } from "react-i18next"
import { Link } from "react-router-dom"




const ChooseGame = (props) => {
    const { t } = props;

    const handleSameGame = () => {
        window.location.reload()
    }

    const checkActualUrl = () => {
        if (document.URL === "http://localhost:3000/memory") {
            return (<><Link to="/quiz">
                <div className="gm-choosegame-img"><img style={{ pointerEvents: "none" }} src={quiz} alt="quiz" width="100%" /></div>
            </Link>
                <div onClick={handleSameGame} className="gm-choosegame-img"><img style={{ pointerEvents: "none" }} src={memory} alt="memory" width="100%" /></div>
            </>)
        } else if (document.URL === "http://localhost:3000/quiz") {
            return (<>
                <div onClick={handleSameGame} className="gm-choosegame-img"><img style={{ pointerEvents: "none" }} src={quiz} alt="quiz" width="100%" /></div>
                <Link to="/memory">
                    <div className="gm-choosegame-img"><img style={{ pointerEvents: "none" }} src={memory} alt="memory" width="100%" /></div>
                </Link>
            </>)
        } else {
            return (<><Link to="/quiz">
                <div className="gm-choosegame-img"><img style={{ pointerEvents: "none" }} src={quiz} alt="quiz" width="100%" /></div>
            </Link>
                <Link to="/memory">
                    <div className="gm-choosegame-img"><img style={{ pointerEvents: "none" }} src={memory} alt="memory" width="100%" /></div>
                </Link>
            </>)
        }
    }
    return (

        <div className="gm-choosegame-container">
            {/* {t('gamification.components.chooseGame.title')} */}
            <h1>
                {t('gamification.components.chooseGame.title')}
            </h1>
            {/* {t('gamification.components.chooseGame.subtitle')} */}
            <p className="gm-choosegame-container-p">
                {t('gamification.components.chooseGame.subtitle')}
            </p>
            <div className='gm-choosegame-container-game'>

                {checkActualUrl()}

            </div>
        </div>
    )

}
export default withTranslation()(ChooseGame);