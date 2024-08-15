import services2 from './services2.twig';

import services2Data from './services2.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Services2' };

export const srvcs = () => services2(services2Data);
