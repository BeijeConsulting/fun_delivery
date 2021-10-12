import React from 'react';
import 'antd/dist/antd.css';
import { Switch } from 'antd';

const SwitchProfile = (props) => {

    const handleSwitch = (e) => {
       props.handleSwitchCallback(e)
    }

    return (
        <>
            <Switch 
                checked={props.value}      
                onClick={handleSwitch} 
                defaultChecked={props.defaultChecked}
            />
        </>
    )
}

export default SwitchProfile