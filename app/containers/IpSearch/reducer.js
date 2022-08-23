import produce from 'immer';

import {
  GET_IP_ERROR,
  GET_IP_SUCCESS,
  GET_IP_USER_SUCCESS,
  GET_SEARCH
} from './constants';

export const initialState = {
  items: [],
  item: [],
  allSearch: [],
  searchValue: '',
  error: []
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_IP_SUCCESS:
        //draft.items = action.items;
        return {
          ...state,
          items: action.items,
          allSearch: [...state.allSearch, action.items]
        }
        break;
      case GET_IP_USER_SUCCESS:
        draft.item = action.item
        break;
      case GET_SEARCH:
        draft.searchValue = action.searchValue
        break;
      case GET_IP_ERROR:
        draft.error = [...state.error, action.error]
    }
  });
