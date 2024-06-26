import { ReactElement } from 'react';

export interface IProjectCategory {
    key: string;
    text: string;
    stripeIndex: number;
    leftMargin?: number;
    content?: ReactElement;
}