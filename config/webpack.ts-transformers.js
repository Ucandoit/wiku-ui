/**
 * Configuration for typescript-plugin-styled-components allowing better debugging experience.
 */
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const getCustomTransformers = () => ({ before: [styledComponentsTransformer] });

module.exports = getCustomTransformers;