import testimonial from './testimonial.twig';
import './testimonial';
import testimonialData from './testimonial.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Testimonial' };

export const tstmnl = () => testimonial(testimonialData);
