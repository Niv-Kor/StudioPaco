import { FC, HTMLAttributes, useRef, useState } from 'react';
import MenuButton from 'Components/Menu Button/MenuButton';
import { DrawerState, IDrawer } from 'Utils/types';
import useOutsideClick from 'shared/hooks/useOutsideClick';
import { BackgroundMask, Container, DrawerWrapper } from "./DrawerButton.style";
import { IDrawerContainer } from "./types";

export interface IDrawerButton {
    text: string;
    drawerComponent?: FC<IDrawer>;
    blurBackground?: boolean;
    drawerProps?: any;
    drawerContainerProps?: IDrawerContainer;
    onClick?: VoidFunction;
}

const DrawerButton: FC<IDrawerButton & Partial<HTMLAttributes<HTMLDivElement>>> = ({
    text,
    drawerComponent: DrawerComponent,
    blurBackground = false,
    drawerProps = {},
    drawerContainerProps = {},
    ...restProps
}) => {
    const drawerRef = useRef<HTMLDivElement>(null);
    const [drawerState, setDrawerState] = useState<DrawerState>(DrawerState.Closed);

    useOutsideClick([drawerRef], () => setDrawerState(DrawerState.Closed));

    const onHover = (): void => {
        if (drawerState === DrawerState.Closed)
            setDrawerState(DrawerState.SemiOpen);
    }

    const onLeave = (): void => {
        if (drawerState === DrawerState.SemiOpen)
            setDrawerState(DrawerState.Closed);
    }

    const onClick = (): void => {
        setDrawerState(prevState => {
            switch (prevState) {
                case DrawerState.SemiOpen:
                case DrawerState.Closed: return DrawerState.Open;
                case DrawerState.Open: return DrawerState.Closed;
            }
        });
    }

    return (
        <Container
            ref={drawerRef}
            {...restProps}
        >
            <MenuButton
                text={text}
                onClick={onClick}
                onHover={onHover}
                onLeave={onLeave}
            />
            {blurBackground && <BackgroundMask displayed={drawerState === DrawerState.Open} />}
            {!!DrawerComponent && (
                <DrawerWrapper
                    {...drawerContainerProps}
                    state={drawerState}
                >
                    <DrawerComponent
                        {...drawerProps}
                        state={drawerState}
                        onClose={() => setDrawerState(DrawerState.Closed)}
                    />
                </DrawerWrapper>
            )}
        </Container>
    );
}

export default DrawerButton;