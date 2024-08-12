import service from './service.twig';

import serviceData from './service.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Service' };

export const srvc = () => service(serviceData);
