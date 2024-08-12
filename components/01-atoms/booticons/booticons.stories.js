import booticons from './booticons.twig';

import booticonsData from './booticons.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Booticons' };

export const buticns = () => booticons(booticonsData);
