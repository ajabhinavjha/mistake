import contactform from './contactform.twig';

import contactformData from './contactform.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Contactform' };

export const cntctfrm = () => contactform(contactformData);
