export const AccentColor = '#ffdd00';
export const NaturalColor = '#ddd';
export const BackgroundColor = '#f1f1f1';

export const ACTIVE_ACCENT_PAGE_CLASS = 'active-accent-page';
export const isRevertMode = (): boolean => {
    return !!document.querySelector(`.${ACTIVE_ACCENT_PAGE_CLASS}`);
}