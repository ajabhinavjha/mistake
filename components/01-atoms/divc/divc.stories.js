import divc from './divc.twig';

import divcData from './divc.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Divc' };

export const dvc = () => divc(divcData);
