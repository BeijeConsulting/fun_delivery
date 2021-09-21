import { Component } from 'react'
import './Button.css'

class Button extends Component {

    handleButton = (e) => {
        this.props.callback(e.target.value)
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.handleButton}>
                {this.props.label}
            </button>
        )
    }
}

export default Button;