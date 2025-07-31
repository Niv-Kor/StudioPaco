import { MutableRefObject, useEffect } from 'react';

export const OUTSIDE_CLICKABLE = "outside-clickable";

const useOutsideClick = (
    refs: MutableRefObject<HTMLElement | null>[],
    onOutsideClick: () => void
) => {
    useEffect(() => {
        const onMouseDown = (ev: MouseEvent) => {
            const target = ev.target as HTMLElement | null;
            const isIgnored = target?.closest(`.${OUTSIDE_CLICKABLE}`) !== null;
            const clickedInside = refs.some(ref =>
                ref.current && target && ref.current.contains(target)
            );

            if (!clickedInside || isIgnored) {
                onOutsideClick?.();
            }
        };

        document.addEventListener("mousedown", onMouseDown);
        return () => {
            document.removeEventListener("mousedown", onMouseDown);
        };
    }, [refs, onOutsideClick]);
};

export default useOutsideClick;
