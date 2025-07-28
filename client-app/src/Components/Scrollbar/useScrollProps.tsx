import { MutableRefObject, useEffect, useState } from "react";
import { IScrollbarHookResult } from "./types";

const useScrollProps = (
    containerRef: MutableRefObject<any>,
    width: number,
    rightOffset: number,
    isEnabled: boolean
): IScrollbarHookResult => {
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [scrollPercent, setScrollPercent] = useState<number>(1);
    const [offsetHeight, setOffsetHeight] = useState<number>(0);
    const [scrollHeight, setScrollHeight] = useState<number>(0);
    const [isScrollable, setIsScrollable] = useState<boolean>(false);
    const [thumbHeight, setThumbHeight] = useState<number>(0);

    requestAnimationFrame(() => onScroll());

    const onScroll = () => {
        const container = containerRef?.current;
        if (!container) return;

        const { scrollTop, offsetHeight, scrollHeight } = container;
        const percent = 1 - scrollTop / (scrollHeight - offsetHeight);
        const pageHeight = document.body.clientHeight;
        const barThumbHeight = (offsetHeight / scrollHeight) * pageHeight;
        const maxScrollTop = pageHeight - barThumbHeight;

        setScrollTop((1 - percent) * maxScrollTop);
        setScrollHeight(scrollHeight);
        setOffsetHeight(offsetHeight);
        setScrollPercent(percent);
        setIsScrollable(scrollHeight > offsetHeight);
        setThumbHeight(barThumbHeight);
    }

    useEffect(() => {
        if (!containerRef?.current || !isEnabled) return;
        const container = containerRef.current;

        requestAnimationFrame(() => {
            onScroll();
        });

        container.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onScroll);

        return () => {
            container.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [containerRef, isEnabled]);

    return {
        scrollPercent,
        scrollTop,
        scrollHeight,
        offsetHeight,
        scrollbarProps: {
            isActive: isEnabled && isScrollable,
            width,
            height: thumbHeight,
            x: rightOffset,
            y: !isNaN(scrollTop) ? scrollTop : 0
        }
    }
}

export default useScrollProps;