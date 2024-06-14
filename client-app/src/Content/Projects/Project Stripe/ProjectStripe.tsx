import { FC, useRef, useMemo, useState, useEffect } from "react";
import {
    Stripe,
    Container
} from "./ProjectStripe.style";

export interface IProjectStripe {
    enabled: boolean;
    index: number;
    width: number;
    selected: boolean;
    hovered: boolean;
    leftMargin?: number;
    openDelay?: number;
}

const ProjectStripe: FC<IProjectStripe> = props => {
    const { selected, width, openDelay } = props;
    const [isOpen, setOpen] = useState<boolean>(false);
    const stripeRef = useRef<HTMLDivElement>(null);
    const rightOffset = useMemo<number>(() => {
        if (!stripeRef?.current) return 0;

        const rect = stripeRef.current.getBoundingClientRect();
        return window.innerWidth - rect.right;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stripeRef, stripeRef?.current]);

    useEffect(() => {
        if (selected) setTimeout(() => setOpen(true), (openDelay ?? 0) * 1000);
        else setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    return (
        <>
            <Stripe
                {...props}
                ref={stripeRef}
            />
            <Container
                className={selected ? 'active-project' : ''}
                open={isOpen}
                rightOffset={rightOffset + width}
            />
        </>
    )
}

export default ProjectStripe;