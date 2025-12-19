import styled from "styled-components";

export const Container = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    width: 60px;
`;

export const Icon = styled.img`
    width: 40px;
`;

export const Label = styled.span<{
    dir: "rtl" | "ltr";
}>`
    margin-top: -4px;
    font-size: 1rem;
    color: black;

    ${({ dir }) => {
        switch (dir) {
            case "rtl": return `
                margin-right: 2px;
            `;

            case "ltr": return `
                margin-right: 2px;
            `;
        }
    }};
`;