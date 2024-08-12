import ouragentcomp from './ouragentcomp.twig';

import ouragentcompData from './ouragentcomp.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Ouragentcomp' };

export const ouragntcomp = () => ouragentcomp(ouragentcompData);
