import paragraph from './paragraph.twig';

import paragraphData from './paragraph.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Paragraph' };

export const pragrph = () => paragraph(paragraphData);
