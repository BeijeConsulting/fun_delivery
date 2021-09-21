import { Component } from "react";
import "./InputBox.css";

class InputBox extends Component {
    
    handleInputBox = (e) => {
        this.props.callback(e.target.value);
    };

    render() {
        return (
                <input
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.handleInputBox}
                    className={this.props.inputClass}
                />
        );
    }
}

export default InputBox;
