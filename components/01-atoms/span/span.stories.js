import span from './span.twig';

import spanData from './span.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Span' };

export const spn = () => span(spanData);
