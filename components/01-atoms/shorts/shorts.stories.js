import shorts from './shorts.twig';

import shortsData from './shorts.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Shorts' };

export const shrts = () => shorts(shortsData);
