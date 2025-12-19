import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const Name = styled.span`
    font-size: 1.5rem;
    margin-right: 30px;
`;

export const BottomTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Role = styled.span`
    font-size: 1rem;
    padding-right: 30px;
`;

export const Delimiter = styled.div<{
    dir: "rtl" | "ltr";
}>`
    border-bottom: 1px solid black;
    margin-left: ${({ dir }) => (dir === "ltr") ? 32 : 0}px;
`;

export const StudioLabel = styled.span<{
    dir: "rtl" | "ltr";
}>`
    ${({ dir }) => {
        switch (dir) {
            case "rtl": return `
                margin-right: 50px;
            `;

            case "ltr": return `
                margin-left: 32px;
            `;
        }
    }};
`;

export const StudioName = styled(StudioLabel)`
    margin-top: 10px;
    font-size: 1.5rem;
`;

export const StudioSlogan = styled(StudioLabel)`
    font-size: .85rem;
    letter-spacing: ${({ dir }) => dir === "rtl" ? 1.3 : 0}px;
`;