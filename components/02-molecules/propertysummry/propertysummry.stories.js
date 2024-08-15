import propertysummry from './propertysummry.twig';

import propertysummryData from './propertysummry.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Propertysummry' };

export const prprtysmry = () => propertysummry(propertysummryData);
