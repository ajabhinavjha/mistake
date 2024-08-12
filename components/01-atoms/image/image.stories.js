import image from './image.twig';

import imageData from './image.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

export const img = () => image(imageData);
