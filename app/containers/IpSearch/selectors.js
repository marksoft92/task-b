
import { createSelector } from 'reselect';
import { initialState } from './reducer';

import {SCOPE} from './constants';

const context = state => state[SCOPE] || initialState;

export const makeSelectIps = () =>
  createSelector(
    context,
    substate => substate,
  );
export const makeSelectValue = () =>
  createSelector(
    context,
    state => state.value,
  );

export default makeSelectIps;
