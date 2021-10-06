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
                defaultChecked
                onClick={handleSwitch} 
            />
        </>
    )
}

export default SwitchProfile