import { FC } from "react";
import { Bar } from "./Scrollbar.style";
import { IScrollbar } from "./types";
import { createPortal } from "react-dom";

const Scrollbar: FC<IScrollbar> = (props) => {
    const portalTarget = document.getElementById("scrollbar-root");
    if (!portalTarget) return null;
    
    return createPortal(
        <Bar {...props} />,
        portalTarget
    );
}

export default Scrollbar;