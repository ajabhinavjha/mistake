import input from './input.twig';

import inputData from './input.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Input' };

export const inpt = () => input(inputData);
