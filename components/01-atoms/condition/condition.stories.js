import condition from './condition.twig';

import conditionData from './condition.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Condition' };

export const cndtn = () => condition(conditionData);
