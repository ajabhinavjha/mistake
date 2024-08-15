import statscard from './statscard.twig';

import statscardData from './statscard.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Statscard' };

export const srvclst = () => statscard(statscardData);
