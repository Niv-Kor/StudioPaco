import { useEffect } from "react";

const useBackButton = (stateName: string, onBack?: () => void, enabled: boolean = true): void => {
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            event.preventDefault();
            if (!enabled) return;
            
            onBack?.() && window.history.pushState(null, stateName, window.location.pathname);
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [onBack, enabled]);
}

export default useBackButton;