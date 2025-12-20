import { FC } from "react";
import { PRIMARY_BUTTONS_CONFIG, VCARD } from "./consts";
import { Container } from "./PrimaryButtons.style";
import PrimaryButton from "./Button/Button";
import { PrimaryButtonType } from "./types";
import { SOCIAL_LINKS } from "shared/consts";
import { noop } from "lodash";

const PrimaryButtons: FC = () => {
    const handleShare = async (): Promise<void> => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: document.title,
                    url: window.location.href,
                });
            }
            catch {}
        }
        //copy link to clipboard as a fallback
        else {
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
            catch {
                alert('Sharing is not supported in this browser.');
            }
        }
    }

    const handleCall = (): void => {
        window.location.href = `tel:${SOCIAL_LINKS.phone}`;
    }

    const handleAddToContacts = () => {
        const vcard = VCARD.join('\r\n');
        const blob = new Blob([vcard], {
            type: "text/vcard;charset=utf-8"
        });
        
        const url = URL.createObjectURL(blob);
        const tempElement = document.createElement("a");
        
        tempElement.href = url;
        tempElement.target = '_blank';
        document.body.appendChild(tempElement);
        tempElement.click();

        setTimeout(() => {
            document.body.removeChild(tempElement);
            URL.revokeObjectURL(url);
        }, 100);
    }
    
    const getButtonAction = (id: PrimaryButtonType): VoidFunction | undefined => {
        const actionsMap: Partial<Record<PrimaryButtonType, VoidFunction>> = {
            [PrimaryButtonType.Share]: handleShare,
            [PrimaryButtonType.Phone]: handleCall,
            [PrimaryButtonType.Contacts]: handleAddToContacts,
        };
        
        return actionsMap?.[id];
    }
    
    return (
        <Container>
            {Object.entries(PRIMARY_BUTTONS_CONFIG).map(([id, config]) => (
                <PrimaryButton
                    key={id}
                    {...config}
                    onClick={getButtonAction(id as unknown as PrimaryButtonType) ?? noop}
                />
            ))}
        </Container>
    )
}

export default PrimaryButtons;