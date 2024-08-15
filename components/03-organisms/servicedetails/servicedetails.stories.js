import servicedetails from './servicedetails.twig';

import servicedetailsData from './servicedetails.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Servicedetails' };

export const srvcdtls = () => servicedetails(servicedetailsData);
