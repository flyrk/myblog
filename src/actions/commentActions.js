import { ADD_COMMENT } from './types';

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}
