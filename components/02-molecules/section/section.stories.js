import section from './section.twig';

import sectionData from './section.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Section' };

export const sction = () => section(sectionData);
