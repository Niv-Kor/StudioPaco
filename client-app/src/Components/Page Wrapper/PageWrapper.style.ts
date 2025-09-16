import styled from 'styled-components';
import { RTLTextAlignClassName } from "../../Utils/constants";

export const Wrapper = styled.div<{
    rtl: boolean;
}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    height: 100vh;
    
    ${({ rtl }) => `
        & .${RTLTextAlignClassName} {
            text-align: ${rtl ? 'right' : 'left'};
        }
    `}
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;