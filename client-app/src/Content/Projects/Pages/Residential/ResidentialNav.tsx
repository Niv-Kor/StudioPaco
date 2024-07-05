import { FC } from 'react';
import ThumbnailImg1 from 'resources/Graphics/Projects/Residential/A26.1-360.380.png';
import {
    Layout,
    Item,
    ThumbnailWrapper,
    ThumbnailCover,
    Thumbnail,
    Name
} from './ResidentialNav.style';

const ResidentialNav: FC = () => {
    return (
        <Layout>
            <Item>
                <Name>.SH40</Name>
                <ThumbnailWrapper>
                    <Thumbnail src={ThumbnailImg1} alt={''} />
                    <ThumbnailCover />
                </ThumbnailWrapper>
            </Item>
            <Item>
                <Name>.Y28</Name>
                <ThumbnailWrapper>
                    <Thumbnail src={ThumbnailImg1} alt={''} />
                    <ThumbnailCover />
                </ThumbnailWrapper>
            </Item>
            <Item>
                <Name>.H28</Name>
                <ThumbnailWrapper>
                    <Thumbnail src={ThumbnailImg1} alt={''} />
                    <ThumbnailCover />
                </ThumbnailWrapper>
            </Item>
            <Item>
                <Name>.P10</Name>
                <ThumbnailWrapper>
                    <Thumbnail src={ThumbnailImg1} alt={''} />
                    <ThumbnailCover />
                </ThumbnailWrapper>
            </Item>
            <Item>
                <Name>.A26</Name>
                <ThumbnailWrapper>
                    <Thumbnail src={ThumbnailImg1} alt={''} />
                    <ThumbnailCover />
                </ThumbnailWrapper>
            </Item>
        </Layout>
    );
}

export default ResidentialNav;