/**
 * Asynchronously loads the component for Countries
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
