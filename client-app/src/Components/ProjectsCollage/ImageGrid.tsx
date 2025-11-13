import { FC, useEffect, useState } from "react";
import { Grid } from "./ProjectsCollage.style";
import { ICollageGrid } from "./types";

const ENTER_TIME = 2;

interface IIMageGrid {
    settings: ICollageGrid
    imageLoader: () => string;
    isActive: boolean;
}

const ImageGrid: FC<IIMageGrid> = ({
    settings,
    imageLoader,
    isActive,
}) => {
    const [displayedImage, setDisplayedImage] = useState<string>();
    const [isTransitioning, setTransitionFlag] = useState<boolean>(true);
    const shouldReceiveImage = !settings.color;
    
    const loadImage = (): void => {
        const image = shouldReceiveImage ? imageLoader?.() : "";
        image && setDisplayedImage(image);
        
        setTimeout(() => {
            setTransitionFlag(false);
        }, ENTER_TIME * 1000);
    }
    
    useEffect(() => {
        if (isActive) loadImage();
        else setTransitionFlag(true);
    }, [isActive]);
    
    return (
        <Grid
            className={(!shouldReceiveImage && isTransitioning) ? "transitioning" : ""}
            {...settings}
        >
            {shouldReceiveImage && (
                <img
                    className={isTransitioning ? "transitioning" : ""}
                    src={displayedImage}
                    alt=""
                />
            )}
        </Grid>
    );
}

export default ImageGrid;