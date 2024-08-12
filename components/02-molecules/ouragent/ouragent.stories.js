import ouragent from './ouragent.twig';

import ouragentData from './ouragent.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Ouragent' };

export const ouragnt = () => ouragent(ouragentData);
