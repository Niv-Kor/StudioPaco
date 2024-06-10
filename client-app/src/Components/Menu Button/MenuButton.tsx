import { FC } from 'react';
import { Button } from './MenuButton.style';

interface IMenuButton {
    text: string;
    onClick: () => void;
    onHover?: () => void;
    onLeave?: () => void;
}

export const MenuButton: FC<IMenuButton> = ({
    text,
    onClick,
    onHover,
    onLeave
}) => {
    return (
        <Button
            onClick={onClick}
            onMouseEnter={onHover ?? (() => {})}
            onMouseLeave={onLeave ?? (() => {})}
        >
            .{text}
        </Button>
    );
}

export default MenuButton;