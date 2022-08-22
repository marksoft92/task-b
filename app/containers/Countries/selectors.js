
import { createSelector } from 'reselect';
import { initialState } from './reducer';

import {SCOPE} from './constants';

const context = state => state[SCOPE] || initialState;

export const makeSelectCountries = () =>
  createSelector(
    context,
    substate => substate,
  );
export const makeSelectCountriesItems = () =>
  createSelector(
    context,
    state => state.items,
  );

export const makeSelectCountryItem = () =>
  createSelector(
    context,
    state => state.item,
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
export default makeSelectCountries;
