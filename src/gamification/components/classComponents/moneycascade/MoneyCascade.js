import { Component } from "react";
import SingleMoneyCascade  from "../../funcComponents/singlemoneycascade/SingleMoneyCascade"
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
        let arr = Array.from('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        return arr.map((el, i) => {
            animationDelay = `${(Math.random() * 30).toFixed(2)}s`;
            fontSize = `${(Math.floor(Math.random() * 10) + 10)}px`;
            let style = {
                animationDelay,
                fontSize
            }
            return (<SingleMoneyCascade src={this.props.svgCascade} key={i} id={i} style={style} />)
        })
    }

   

    render() {
        return (
            <div 
            style={{pointerEvent:"none"}}
            className='gm-snowmoney_container'>
                {this.snow()}
            </div>
        )
    }
}


export default MoneyCascade;