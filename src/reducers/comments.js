import { ADD_COMMENT } from '../actions/types';

const initialState = [];
export default function(state = initialState, action={}) {
  switch(action.type) {
    case ADD_COMMENT:
      return [
        ...action.comment
      ];
    default: 
      return state;
  }
}