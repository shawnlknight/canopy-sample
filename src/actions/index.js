import * as actionTypes from '../constants/actionTypes';

export const updateScheduledItem = (itemId, args) => ({
  args,
  itemId,
  type: actionTypes.UPDATE_SCHEDULED_ITEM,
});

export const deleteComment = (itemId) => ({
  itemId,
  type: actionTypes.DELETE_COMMENT,
});
