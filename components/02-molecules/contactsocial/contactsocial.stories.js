import contactsocial from './contactsocial.twig';

import contactsocialData from './contactsocial.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Contactsocial' };

export const cntctsocl = () => contactsocial(contactsocialData);
