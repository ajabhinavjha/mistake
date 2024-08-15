import propertiescard from './propertiescard.twig';

import propertiescardData from './propertiescard.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Propertiescard' };

export const prprtscrd = () => propertiescard(propertiescardData);
