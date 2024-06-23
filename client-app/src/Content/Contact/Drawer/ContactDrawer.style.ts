import styled, { keyframes, css } from "styled-components";

export const Container = styled.div<{
    open: boolean;
}>`
    position: absolute;
    top: -150%;
    left: 20px;
    opacity: 0;
    transform: translateY(0);
    transition: opacity .1s, transform .2s;

     ${({ open }) => open && `
        opacity: 1;
        transform: translateY(-50%);
     `}
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ListRow = styled.span<{
    letterSpacing?: number;
}>`
    white-space: nowrap;
    font-size: 1.5rem;
    letter-spacing: ${({ letterSpacing }) => letterSpacing ?? 0}px;
`;

export const ListRowHebrew = styled(ListRow)`
    font-family: 'ArbelHagildaMenukad', 'Futura';
`;

export const ListRowEnglish = styled(ListRow)`
    font-family: 'Futura';
`;

const FadeFromLeft = keyframes`
    from { width: 0% }
    to { width: 100% }
`;

export const Delimiter = styled.hr<{
    open: boolean;
}>`
    width: 0%;

    ${({ open }) => open && css`
        animation-name: ${FadeFromLeft};
        animation-duration: .2s;
        animation-delay: .2s;
        animation-fill-mode: forwards;
    `}
`;