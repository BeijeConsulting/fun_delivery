import React from 'react';
import 'antd/dist/antd.css';
import { Switch } from 'antd';

const SwitchProfile = (props) => {
    const handleChange = (e) => {
        props.callback(e)
    }

    return (
        <>
            <Switch
                onChange={handleChange}
                value={props.value}
            />
        </>
    )
}

export default SwitchProfile