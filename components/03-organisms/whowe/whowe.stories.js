import whowe from './whowe.twig';

import whoweData from './whowe.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Whowe' };

export const whw = () => whowe(whoweData);
