import React from "react";
import PropTypes from "prop-types";


const Select = (props) => {

    const handlecallback = (e) => {
        props.callback(e)
    }

    const handleCallBackOnFocus = (e) => {
        if(props.callbackOnFocus) {
            props.callbackOnFocus(e)
        }
    }

    return (
        <select id={props.selectID}
            name={props.selectName}
            className={props.className}
            onChange={handlecallback}
            onFocus={handleCallBackOnFocus}
            value={props.value}
        >
            {
                props.data.map((item, index) => {
                    return (
                        <option value={item} key={index}>
                            {item}
                        </option>
                    )
                })
            }
        </select>
    );
}

Select.propTypes = {
    selectID: PropTypes.string.isRequired,
    selectName: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}

export default Select;

