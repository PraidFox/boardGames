import React from 'react';
import {useOverlays} from "../../tools/hooks/hooksContext/useOverlays";


const Overlay = () => {
    const {isOpen, closeOverlay} = useOverlays()


    if (!isOpen) return null;

    return (
        <div style={{
            backgroundColor: "rgba(0,0,0,0.34)",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "100"
        }}
             onClick={closeOverlay}
        >

        </div>


    );
};

export default Overlay;