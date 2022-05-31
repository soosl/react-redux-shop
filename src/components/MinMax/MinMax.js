import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { getNumBetween } from "../../utils";

// import styles from "./style.module.scss";

export const MinMax = props => {
    const {
        min = 0,
        max = 10,
        value = 0,
        setValue = Function.prototype,
    } = props;

    const inputEl = useRef();

    const handleBlur = () => {
        applyCurrent(inputEl.current.value);
    };

    const applyCurrent = num => {
        const betweenNumber = getNumBetween(min, max, num);

        inputEl.current.value = betweenNumber;
        setValue(betweenNumber);
    };

    const decrValue = () => applyCurrent(value - 1);
    const incrValue = () => applyCurrent(value + 1);

    const handleKeyUp = event => {
        if (event.keyCode !== 13) return;

        applyCurrent(inputEl.current.value);
    };

    useEffect(() => {
        const betweenNumber = getNumBetween(min, max, value);

        inputEl.current.value = betweenNumber;
    }, [value]);

    return (
        <div className="MinMax-wrap">
            <button className="MinMax-btn" onClick={decrValue}>
                -
            </button>
            <input
                type="text"
                ref={inputEl}
                defaultValue={value}
                onBlur={handleBlur}
                onKeyUp={handleKeyUp}
                // className={styles.input}
            />
            <button className="MinMax-btn" onClick={incrValue}>
                +
            </button>
        </div>
    );
};

MinMax.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    current: PropTypes.number,
    setValue: PropTypes.func,
};
