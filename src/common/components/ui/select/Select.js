import React from "react";
import PropTypes from "prop-types";


const Select = (props) => {

    const handlecallback = (e) => {
        props.callback(e)
    }

    const handleCallBackOnFocus = (e) => {
        if (props.callbackOnFocus) {
            props.callbackOnFocus(e)
        }
    }

    return (
        <select id={props.selectID}
            name={props.selectName}
            className={props.className}
            onChange={handlecallback}
            onFocus={handleCallBackOnFocus}
            disabled={props.disable}
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}

export default Select;

