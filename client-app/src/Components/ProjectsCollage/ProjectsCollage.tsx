import { FC, useEffect, useRef, useState } from "react";
import { Container, MapContainer } from "./ProjectsCollage.style";
import { COLLAGE_MAPS } from "./consts";
import { useCollageScale } from "./useCollageScale";
import { PROJECT_IMAGES } from "./projectImages";
import ImageGrid from "./ImageGrid";
import { generateSeconds } from "./utils";

const ProjectsCollage: FC = () => {
    const [collageIndex, setCollageIndex] = useState<number>(0);
    const scale = useCollageScale();
    const [displayedGridIndices, setDisplayedGridIndices] = useState<number[]>([]);
    const hookedIndex = useRef<number>(-1);

    const displayImage = (): void => {
        const currentCollage = COLLAGE_MAPS[collageIndex];
        const index1 = (hookedIndex.current != -1)
            ? hookedIndex.current
            : generateSeconds(0, currentCollage.length - 1);
        
        let index2 = -1;
        do {
            index2 = generateSeconds(0, currentCollage.length - 1);
        } while (currentCollage.length > 1 && index2 === index1);

        hookedIndex.current = index2;
        setDisplayedGridIndices([index1, index2]);
    };

    useEffect(() => {
        displayImage();
        const interval = setInterval(displayImage, 4000);

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, [collageIndex]);
    

    const loadRandomImage = (): string => {
        const randomIndex = Math.floor(Math.random() * PROJECT_IMAGES.length);
        return PROJECT_IMAGES[randomIndex];
    };
    
    return (
        <Container data-collage-container>
            <MapContainer scale={scale}>
                {COLLAGE_MAPS?.[collageIndex]?.map((gridSettings, index) => (
                    <ImageGrid
                        key={index}
                        settings={gridSettings}
                        imageLoader={loadRandomImage}
                        isActive={displayedGridIndices.includes(index)}
                    />
                ))}
            </MapContainer>
        </Container>
    );
}

export default ProjectsCollage;