import "./ChooseGame.css"
import quiz from "../../../assets/images/Quiz.png"
import memory from "../../../assets/images/memory.png"


const ChooseGame = () => {

    return (
        <div className="gm-choosegame-container">
            <h1>Gioca con noi</h1>
            <p className="gm-choosegame-container-p">Gioca con noi in attesa del tuo ordine e guadagna i beijecoins per comprare dei nuovi avatar!</p>
            <div className='gm-choosegame-container-game'>
                <div className="gm-choosegame-img" ><img src={quiz} width="100%" /></div>
                <div className="gm-choosegame-img" ><img src={memory} width="100%" /></div>
            </div>
        </div>
    )
}
export default ChooseGame