import aboutfeatures from './aboutfeatures.twig';

import aboutfeaturesData from './aboutfeatures.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Aboutfeatures' };

export const abtfrs = () => aboutfeatures(aboutfeaturesData);
