import stats from './stats.twig';
import './stats';
import statsData from './stats.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Stats' };

export const stts = () => stats(statsData);
