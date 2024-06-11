import { IProjectCategory } from "./types";

export const StripeWidth = 30;
export const DefaultStripeSpace = StripeWidth + 30;
export const Projects: Array<IProjectCategory> = [
    {
        key: 'commercial'
    },
    {
        key: 'residential'
    },
    {
        key: 'hospitality',
        leftMargin: -StripeWidth / 2
    },
    {
        key: 'interior design',
        leftMargin: -StripeWidth / 2
    },
    {
        key: 'product design'
    },
    {
        key: 'conceptual',
        leftMargin: StripeWidth / 3
    },
    {
        key: 'feasability',
        leftMargin: -StripeWidth / 2 + 5
    },
    {
        key: 'licensing'
    }
];

export const DummyProjects = [...Projects].toSpliced(1, 0, { key: 'dummy' });