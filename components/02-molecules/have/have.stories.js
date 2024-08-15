import have from './have.twig';

import haveData from './have.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/have' };

export const hv = () => have(haveData);
