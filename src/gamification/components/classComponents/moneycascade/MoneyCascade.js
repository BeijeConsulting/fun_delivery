import { Component } from "react";
import SingleMoneyCascade  from "../../funcComponents/singlemoneycascade/SingleMoneyCascade"
import Coin from "../../../assets/images/beijeCoin.png"
import '../../funcComponents/singlemoneycascade/SingleMoney.css'


class MoneyCascade extends Component {


    constructor(props) {
        super(props);
        this.state = {
            sentinella: false
        }
    }
    snow = () => {
        let animationDelay = '0s';
        let fontSize = '100px';
        let arr = Array.from('Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!! Snowflakes are awesome!!! They are like little pieces of magic!!! Love snowflakes!!!')
        return arr.map((el, i) => {
            animationDelay = `${(Math.random() * 30).toFixed(2)}s`;
            fontSize = `${(Math.floor(Math.random() * 10) + 10)}px`;
            let style = {
                animationDelay,
                fontSize
            }
            return (<SingleMoneyCascade src={Coin} key={i} id={i} style={style} />)
        })
    }

   

    render() {
        return (
            <div className='gm-snowmoney_container'>
                {this.snow()}
            </div>
        )
    }
}


export default MoneyCascade;