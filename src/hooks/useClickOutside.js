import { useEffect } from "react";

export const useClickOutside = (ref, cb = Function.prototype) => {
    const handleClick = event => {
        if (!event.composedPath().includes(ref.current)) {
            cb();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);
};
