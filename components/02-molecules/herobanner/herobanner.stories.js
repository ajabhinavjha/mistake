import herobanner from './herobanner.twig';

import herobannerData from './herobanner.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Herobanner' };

export const herobnr = () => herobanner(herobannerData);
