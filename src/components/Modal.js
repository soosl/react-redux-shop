import React, { useEffect, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

export const MyModal = props => {
    const modalEl = useRef();

    useClickOutside(modalEl, () => alert(123));

    return (
        <div className="alert" ref={modalEl}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam eum
            officia quibusdam quia dolores quas iste possimus, reprehenderit
            molestias veniam!
        </div>
    );
};
