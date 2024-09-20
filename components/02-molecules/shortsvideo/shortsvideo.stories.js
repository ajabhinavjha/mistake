import shortsvideo from './shortsvideo.twig';
import './shortsvideo';

import shortsvideoData from './shortsvideo.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Shortsvideo' };

export const shrtsvdo = () => shortsvideo(shortsvideoData);
