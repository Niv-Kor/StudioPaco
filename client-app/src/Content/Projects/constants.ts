import { IProjectCategory } from "./types";

export const StripeWidth = 30;
export const DefaultStripeSpace = StripeWidth + 30;
export const Projects: Array<IProjectCategory> = [
    {
        key: 'commercial',
        stripeIndex: 8
    },
    {
        key: 'residential',
        stripeIndex: 6
    },
    {
        key: 'hospitality',
        stripeIndex: 4,
        leftMargin: -StripeWidth / 2,
    },
    {
        key: 'interior design',
        stripeIndex: 2,
        leftMargin: -StripeWidth / 2
    },
    {
        key: 'product design',
        stripeIndex: 1
    },
    {
        key: 'conceptual',
        stripeIndex: 7,
        leftMargin: StripeWidth / 3
    },
    {
        key: 'feasibility',
        stripeIndex: 3,
        leftMargin: -StripeWidth / 2 + 5
    },
    {
        key: 'licensing',
        stripeIndex: 5
    }
];

export const DummyProjects = [...Projects].toSpliced(1, 0, { key: 'dummy', stripeIndex: 1 });