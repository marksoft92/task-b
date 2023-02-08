import produce from 'immer';

import {
  CHANGE_VALUE,

} from './constants';

export const initialState = {
value: '1'
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {


      case CHANGE_VALUE:
      
        draft.value = action.value
        break;

    }
  });
