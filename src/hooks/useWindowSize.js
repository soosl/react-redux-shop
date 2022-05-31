import { useState, useEffect } from "react";

const getWindowSize = () => {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    };
};

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    const handleResize = () => {
        setWindowSize(getWindowSize());
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
};
