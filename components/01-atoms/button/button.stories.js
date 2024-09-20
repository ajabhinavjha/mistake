import button from './button.twig';

import buttonData from './button.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

export const btn = () => button(buttonData);
