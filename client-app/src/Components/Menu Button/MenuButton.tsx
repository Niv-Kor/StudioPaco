import { FC, useEffect, useState } from 'react';
import { Button } from './MenuButton.style';
import { isRevertMode } from 'Utils/Theme';

interface IMenuButton {
    text: string;
    onClick?: () => void;
    onHover?: () => void;
    onLeave?: () => void;
    revertMode?: boolean;
    type?: "button" | "reset" | "submit";
    disabled?: boolean;
}

export const MenuButton: FC<IMenuButton> = ({
    text,
    onClick,
    onHover,
    onLeave,
    revertMode,
    type,
    disabled
}) => {
    const [isThemeReverted, setThemeRevertedFlag] = useState<boolean>(isRevertMode());

    useEffect(() => {
        setThemeRevertedFlag(isRevertMode());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRevertMode()])

    return (
        <Button
            type={type || "button"}
            disabled={disabled}
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