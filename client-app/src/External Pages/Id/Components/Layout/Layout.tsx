import { FC, ReactNode } from "react";
import { BottomPanel, ContentContainer, SidePanel } from "./Layout.style";
import PrimaryButtons from "../Primary Buttons/PrimaryButtons";

interface ILayout {
    children: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
    return (
        <>
            <SidePanel />
            <BottomPanel>
                <PrimaryButtons />
            </BottomPanel>
            <ContentContainer>
                {children}
            </ContentContainer>
        </>
    )
}

export default Layout;