import download from './download.twig';

import downloadData from './download.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/download' };

export const srvclst = () => download(downloadData);
