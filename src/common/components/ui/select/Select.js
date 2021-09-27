import React from "react";
import PropTypes  from "prop-types";


const Select = (props) => {

    return (
        <select id={props.selectID} name={props.selectName}>
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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}

export default Select;

