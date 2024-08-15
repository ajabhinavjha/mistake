import serviceslist from './serviceslist.twig';

import serviceslistData from './serviceslist.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Serviceslist' };

export const srvclst = () => serviceslist(serviceslistData);
