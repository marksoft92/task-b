
import { createSelector } from 'reselect';
import { initialState } from './reducer';

import {SCOPE} from './constants';

const context = state => state[SCOPE] || initialState;

export const makeSelectIps = () =>
  createSelector(
    context,
    substate => substate,
  );
export const makeSelectIpData = () =>
  createSelector(
    context,
    state => state.items,
  );

export const makeSelectIpUser = () =>
  createSelector(
    context,
    state => state.item,
  );

export const makeSelectError = () =>
  createSelector(
    context,
    state => state.error,
  );

export const makeSelectAllItem = () =>
  createSelector(
    context,
    state => state.allSearch,
  );
export const makeSelectSearch = () =>
  createSelector(
    context,
    state => state.searchValue,
  );
export default makeSelectIps;
