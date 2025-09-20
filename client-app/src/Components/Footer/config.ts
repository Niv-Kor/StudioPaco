import { DrawerState, ITranslation } from "../../Utils/types";
import { DrawerType, IDrawerConfig } from "./types";
import SocialDrawer from "../../Content/Follow/Drawer/SocialDrawer";
import ContactDrawer from "../../Content/Contact/Drawer/ContactDrawer";
import { LanguageData } from "../../Utils/constants";
import { getOtherLanguages } from "./utils";

export const getDrawersConfig = ({ translate, language, changeLanguage }: ITranslation): Record<DrawerType, IDrawerConfig> => ({
    [DrawerType.Social]: {
        id: "social-drawer",
        text: translate({
            en: "follow",
            he: "עקוב",
        }),
        drawerComponent: SocialDrawer,
        blurBackground: true,
        drawerContainerProps: {
            position: "fixed",
            top: 0,
            left: 0,
            translateX: {
                [DrawerState.Open]: "0px",
                [DrawerState.SemiOpen]: "calc(-100% + 15px)",
                [DrawerState.Closed]: "-100%",
            },
        },
    },
    [DrawerType.Contact]: {
        id: "contact-drawer",
        text: translate({
            en: "contact",
            he: "צור קשר",
        }),
        drawerComponent: ContactDrawer,
        blurBackground: true,
        drawerContainerProps: {
            position: "absolute",
            bottom: 45,
            left: 15,
            translateY: {
                [DrawerState.Open]: "0",
                [DrawerState.SemiOpen]: "calc(100% + 45px)",
                [DrawerState.Closed]: "calc(100% + 55px)",
            },
        },
    },
    [DrawerType.Language]: {
        id: "language-drawer",
        text: LanguageData?.[getOtherLanguages(language)?.[0]].displayName,
        onClick: () => changeLanguage(getOtherLanguages(language)?.[0]),
        drawerContainerProps: {
            position: "absolute",
            bottom: 0,
            left: 8,
            translateY: {
                [DrawerState.Open]: "-54px",
                [DrawerState.SemiOpen]: "100%",
                [DrawerState.Closed]: "calc(100% + 10px)",
            },
        },
    },
})