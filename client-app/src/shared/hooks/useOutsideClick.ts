import { MutableRefObject, useEffect } from 'react';

const useOutsideClick = (ref: MutableRefObject<any>, onOutsideClick: () => void) => {
    useEffect(() => {
        const onMouseDown = (ev: MouseEvent) => {
            if (ref?.current && !ref.current.contains(ev.target))
                onOutsideClick?.();
        }

        document.addEventListener("mousedown", onMouseDown);

        return () => {
            document.removeEventListener("mousedown", onMouseDown);
        };
    }, [ref, onOutsideClick]);
}

export default useOutsideClick;