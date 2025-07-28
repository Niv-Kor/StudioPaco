import { useEffect } from "react";

const useBackButton = (stateName: string, onBack?: () => void, enabled: boolean = true): void => {
    useEffect(() => pushState(), []);
    useEffect(() => {
        if (!enabled) return;
        
        const handlePopState = (event: PopStateEvent) => {
            event.preventDefault();
            enabled && onBack?.() && pushState();
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [onBack, enabled]);
    
    const pushState = (): void => {
        window.history.pushState(null, stateName, window.location.pathname);
    }
}

export default useBackButton;