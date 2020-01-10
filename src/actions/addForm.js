export const IS_SHOW_ADD_FORM = 'IS_SHOW_ADD_FORM';

export const showAddForm = (isShow) => {
  return {
    type: 'IS_SHOW_ADD_FORM',
    payload: isShow,
  }
}
