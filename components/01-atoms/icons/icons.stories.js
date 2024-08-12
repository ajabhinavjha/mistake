import icons from './icons.twig';

import iconsData from './icons.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Icons' };

export const icns = () => icons(iconsData);
