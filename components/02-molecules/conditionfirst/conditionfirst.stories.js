import conditionfirst from './conditionfirst.twig';
import './conditionfirst';

import conditionfirstData from './conditionfirst.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Conditionfirst' };

export const cndnfrst = () => conditionfirst(conditionfirstData);
