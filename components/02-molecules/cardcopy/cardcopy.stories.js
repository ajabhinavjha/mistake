import cardcopy from './cardcopy.twig';

import cardcopyData from './cardcopy.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cardcopy' };

export const crdcpy = () => cardcopy(cardcopyData);
