import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 60px;
    height: 60px;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

export const Label = styled.span<{
    dir: "rtl" | "ltr";
}>`
    font-size: 1rem;
    color: black;

    ${({ dir }) => {
        switch (dir) {
            case "rtl": return `
                margin-right: 8px;
            `;

            case "ltr": return `
                margin-right: 8px;
            `;
        }
    }};
`;