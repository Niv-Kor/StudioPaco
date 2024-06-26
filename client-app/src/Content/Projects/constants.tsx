import { IProjectCategory } from "./types";

export const StripeWidth = 30;
export const DefaultStripeSpace = StripeWidth + 30;
export const Projects: Array<IProjectCategory> = [
    {
        key: 'commercial',
        text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
        stripeIndex: 8,
    },
    {
        key: 'residential',
        text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
        stripeIndex: 6
    },
    {
        key: 'hospitality',
        text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
        stripeIndex: 4,
        leftMargin: -StripeWidth / 2,
    },
    {
        key: 'interior design',
        text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
        stripeIndex: 2,
        leftMargin: -StripeWidth / 2
    },
    {
        key: 'product design',
        text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
        stripeIndex: 1
    },
    {
        key: 'conceptual',
        text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
        stripeIndex: 7,
        leftMargin: StripeWidth / 3
    },
    {
        key: 'feasibility',
        text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
        stripeIndex: 3,
        leftMargin: -StripeWidth / 2 + 5
    },
    {
        key: 'licensing',
        text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
        stripeIndex: 5
    }
];

export const DummyProjects = [...Projects].toSpliced(1, 0, {
    key: 'dummy',
    text: 'Case studies to bridge conceptual vision and viability for potential projects. Concluding analytical processes, examining legal, regulatory, financial and contextual factors to thoroughly vet new developments.',
    stripeIndex: 1
});