import React, { useState } from "react";
import PropTypes from "prop-types";

export const Counter = props => {
    const { min = 0, max = 10 } = props;

    const [value, setValue] = useState(min);

    const incrValue = () => {
        if (value < max) {
            setValue(value + 1);
        }
    };

    const decrValue = () => {
        if (value > min) {
            setValue(value - 1);
        }
    };

    const handleChange = event => {
        const input = event.target;
        let value = parseInt(input.value) || min;

        if (value > max) {
            value = max;
        } else if (value < min) {
            value = min;
        }

        setValue(value);
    };

    return (
        <div className="counter-wrap">
            <button className="counter-btn" onClick={decrValue}>
                -
            </button>
            <input type="text" onChange={handleChange} value={value} />
            <button className="counter-btn" onClick={incrValue}>
                +
            </button>
        </div>
    );
};

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
};
