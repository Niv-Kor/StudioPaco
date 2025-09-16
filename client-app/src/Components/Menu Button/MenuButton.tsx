import { FC, useEffect, useState } from 'react';
import { Button } from './MenuButton.style';
import { isRevertMode } from 'Utils/Theme';
import useTranslation from "shared/hooks/useTranslation";
import { noop } from "lodash";

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
    const { textDir } = useTranslation();

    useEffect(() => {
        setThemeRevertedFlag(isRevertMode());
    }, [isRevertMode()])

    return (
        <Button
            type={type || "button"}
            disabled={disabled}
            onClick={onClick}
            revertMode={revertMode !== false && (!!revertMode || isThemeReverted)}
            onMouseEnter={onHover ?? noop}
            onMouseLeave={onLeave ?? noop}
            dir={textDir}
        >
            .{text}
        </Button>
    );
}

export default MenuButton;