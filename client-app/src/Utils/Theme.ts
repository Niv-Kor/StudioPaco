import { RuleSet } from "styled-components";
import { css as cssFunc } from 'styled-components';

export const AccentColor = '#ffdd00';
export const NaturalColor = '#ddd';
export const BackgroundColor = '#f1f1f1';

export const ACTIVE_ACCENT_PAGE_CLASS = 'active-accent-page';
export const isRevertMode = (): boolean => {
    return !!document.querySelector(`.${ACTIVE_ACCENT_PAGE_CLASS}`);
}

export const MOBILE_BREAKPOINTS: Record<string, number> = {
    SM: 400,
    MD: 880,
    LG: 1200
}

export const isMobile = (): boolean =>
    window.innerWidth <= MOBILE_BREAKPOINTS.MD;

export const mediaQuery = (property: string, value: string, css: RuleSet<object>): RuleSet<object> =>
    cssFunc`@media (${property}: ${value}) { ${css} }`

export const mediaQueryMinWidth = (width: number, css: RuleSet<object>): RuleSet<object> =>
    mediaQuery('min-width', `${width}px`, css);

export const mediaQueryMaxWidth = (width: number, css: RuleSet<object>): RuleSet<object> =>
    mediaQuery('max-width', `${width}px`, css);