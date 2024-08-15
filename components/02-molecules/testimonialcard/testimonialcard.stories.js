import testimonialcard from './testimonialcard.twig';

import testimonialcardData from './testimonialcard.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Testimonialcard' };

export const tstmnlcrd = () => testimonialcard(testimonialcardData);
