import { useState, useEffect } from 'react';

export const useCollageScale = () => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            const container = document.querySelector('[data-collage-container]') as HTMLElement;
            if (container) {
                const rect = container.getBoundingClientRect();
                const availableWidth = rect.width;
                const availableHeight = rect.height;
                const baseWidth = 700;
                const baseHeight = 600;
                
                //maintain aspect ratio - use full available space
                const scaleX = availableWidth / baseWidth;
                const scaleY = availableHeight / baseHeight;
                const newScale = Math.min(scaleX, scaleY);
                setScale(newScale);
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    return scale;
};
