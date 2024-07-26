import { FC, useEffect, useState } from 'react';
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
    const [isThemeReverted, setThemeRevertedFlag] = useState<boolean>(isRevertMode());

    useEffect(() => {
        setThemeRevertedFlag(isRevertMode());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRevertMode()])

    return (
        <Button
            onClick={onClick}
            revertMode={revertMode !== false && (!!revertMode || isThemeReverted)}
            onMouseEnter={onHover ?? (() => {})}
            onMouseLeave={onLeave ?? (() => {})}
        >
            .{text}
        </Button>
    );
}

export default MenuButton;