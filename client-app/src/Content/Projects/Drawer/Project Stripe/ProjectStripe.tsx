import { FC, useRef, useMemo } from "react";
import {
    Stripe,
    Container
} from "./ProjectStripe.style";

export interface IProjectStripe {
    width: number;
    selected: boolean;
    hovered: boolean;
    leftMargin?: number;
}

const ProjectStripe: FC<IProjectStripe> = props => {
    const { selected, width } = props;
    const stripeRef = useRef<HTMLDivElement>(null);
    const rightOffset = useMemo<number>(() => {
        if (!stripeRef?.current) return 0;

        const rect = stripeRef.current.getBoundingClientRect();
        return window.innerWidth - rect.right;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stripeRef, stripeRef?.current]);

    return (
        <>
            <Stripe
                {...props}
                ref={stripeRef}
                open={selected}
            />
            <Container
                open={selected}
                rightOffset={rightOffset + width}
            />
        </>
    )
}

export default ProjectStripe;