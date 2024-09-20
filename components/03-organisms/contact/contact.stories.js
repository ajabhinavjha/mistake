import contact from './contact.twig';

import contactData from './contact.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Contact' };

export const cntct = () => contact(contactData);
