import { useEffect, useState } from "react";

interface IScreenSize {
    width: number;
    height: number;
}

const useScreenSize = (): IScreenSize => {
    const [screenSize, setScreenSize] = useState<IScreenSize>({ width: 0, height: 0 });
    
    useEffect(() => {
        const adjustWidth = () => setScreenSize({
            width: document.body.clientWidth,
            height: document.body.clientHeight
        });

        window.addEventListener("resize", adjustWidth);
        adjustWidth();

        return () => {
            window.removeEventListener("resize", adjustWidth);
        }
    }, []);
    
    return screenSize;
}

export default useScreenSize;