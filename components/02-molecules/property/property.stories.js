import property from './property.twig';
import './property';
import propertyData from './property.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Property' };

export const prprty = () => property(propertyData);
