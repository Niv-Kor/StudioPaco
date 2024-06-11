import { FC } from 'react';
import { Button } from './MenuButton.style';
import { isRevertMode } from 'Utils/Theme';

interface IMenuButton {
    text: string;
    onClick: () => void;
    onHover?: () => void;
    onLeave?: () => void;
    revertMode?: boolean;
}

export const MenuButton: FC<IMenuButton> = ({
    text,
    onClick,
    onHover,
    onLeave,
    revertMode
}) => {
    return (
        <Button
            onClick={onClick}
            revertMode={!!revertMode || isRevertMode()}
            onMouseEnter={onHover ?? (() => {})}
            onMouseLeave={onLeave ?? (() => {})}
        >
            .{text}
        </Button>
    );
}

export default MenuButton;