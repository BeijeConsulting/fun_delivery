import React from "react";
import PropTypes from "prop-types";


const Select = (props) => {

    handlecallback = (e) => {
        props.callback(e)
    }

    return (
        <select id={props.selectID}
            name={props.selectName}
            className={props.className}
            onChange={props.handlecallback}
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

