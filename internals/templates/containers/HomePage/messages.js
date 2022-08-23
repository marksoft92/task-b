/*
 * Countries Messages
 *
 * This contains all the text for the Countries container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Countries';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Countries container!',
  },
});
