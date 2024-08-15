import properties from './properties.twig';

import propertiesData from './properties.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Properties' };

export const prprts = () => properties(propertiesData);
