import { FC, useRef, useMemo, useState, useEffect } from "react";
import { IProjectCategory } from "../types";
import {
    Stripe,
    Container,
    ContentWrapper,
    Text,
    ContentElementContainer
} from "./ProjectStripe.style";
import ProjectsTable from '../Table/ProjectsTable';

export interface IProjectStripe {
    category: IProjectCategory;
    enabled: boolean;
    index: number;
    width: number;
    selected: boolean;
    hovered: boolean;
    openDelay?: number;
}

const ProjectStripe: FC<IProjectStripe> = props => {
    const { category, selected, width, openDelay } = props;
    const [isOpen, setOpen] = useState<boolean>(false);
    const [isTextDisplayed, setTextDisplayed] = useState<boolean>(false);
    const selectionTimeout = useRef<NodeJS.Timeout | undefined>();
    const textDisplayTimeout = useRef<NodeJS.Timeout | undefined>();
    const stripeRef = useRef<HTMLDivElement>(null);
    const rightOffset = useMemo<number>(() => {
        if (!stripeRef?.current) return 0;

        const rect = stripeRef.current.getBoundingClientRect();
        return window.innerWidth - rect.right;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stripeRef, stripeRef?.current]);

    useEffect(() => {
        if (selected) {
            selectionTimeout.current = setTimeout(() => {
                setOpen(true);
                selectionTimeout.current = undefined;
            }, (openDelay ?? 0) * 1000);
        }
        else {
            if (!!selectionTimeout.current) {
                clearTimeout(selectionTimeout.current);
                selectionTimeout.current = undefined;
            }

            setOpen(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected]);

    useEffect(() => {
        if (isOpen) {
            textDisplayTimeout.current = setTimeout(() => {
                setTextDisplayed(true);
                textDisplayTimeout.current = undefined;
            }, 300);
        }
        else {
            if (!!textDisplayTimeout.current) {
                clearTimeout(textDisplayTimeout.current);
                textDisplayTimeout.current = undefined;
            }

            setTextDisplayed(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <>
            <Stripe
                {...props}
                {...category}
                ref={stripeRef}
            />
            <Container
                className={selected ? 'active-project' : ''}
                open={isOpen}
                rightOffset={rightOffset + width}
            >
                <ContentWrapper offset={rightOffset + width}>
                    <Text
                        displayed={isTextDisplayed}
                        fullHeight={!category.projects.length}
                    >
                        <span className={'category-title'}>{category.key}</span>
                        {category.text}
                    </Text>
                    <ContentElementContainer>
                        <ProjectsTable category={category} />
                    </ContentElementContainer>
                </ContentWrapper>
            </Container>
        </>
    )
}

export default ProjectStripe;