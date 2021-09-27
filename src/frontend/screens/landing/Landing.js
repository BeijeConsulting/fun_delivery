import { Component } from "react";
import '../landing/Landing.css';
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag';
import Input from '../../../common/components/ui/inputBox/InputBox';
import Button from '../../../common/components/ui/button/Button';
import Select from "../../../common/components/ui/select/Select";

class Landing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addressValue: '',
        }
    }

    handleCallbackInputBox = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /* DA ULTIMARE */
    handleCallbackBtn = (e) => {
        return
    }

    optionsData = [
        'option1',
        'option2',
        'option3'
    ]

    render() {
        return (
            <div className='landing-screen'>
                {/* NAV  */}

                <HtmlTag
                    tag='h1'
                    htmlTagStyle='main-title'
                    text='Fame? Si mangia!'
                />

                <div className='main-box'>
                    <Input
                        placeholder='via Roma n.173'
                        name='addressValue'
                        type='text'
                        value={this.state.addressValue}
                        callback={this.handleCallbackInputBox}
                        className='landing-input'
                    />

                    <Button
                        text='Trova Ristoranti'
                        callback={this.handleCallbackBtn}
                        className='landing-btn'
                    />
                </div>

                {/* FOOTER */}
            </div>
        )
    }
}

export default Landing;