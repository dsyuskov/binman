export const IS_SHOW_ADD_FORM = 'IS_SHOW_ADD_FORM';
export const IS_SHOW_FAVORITES_CLIENTS = 'IS_SHOW_FAVORITES_CLIENTS';
export const ADD_CLIENT = 'ADD_CLIENT';
export const ADD_CLIENT_TO_FAVORITE = 'ADD_CLIENT_TO_FAVORITE';

export const showAddForm = (isShow) => {
  return {
    type: IS_SHOW_ADD_FORM,
    payload: isShow,
  }
}
export const showFavoritesClients = (isShow) => {
  return {
    type: IS_SHOW_FAVORITES_CLIENTS,
    payload: isShow,
  }
}

export const addClient = (client) => {
  return {
    type: ADD_CLIENT,
    payload: client,
  }
}

export const addClientToFavorite = (client) => {
  return {
    type: ADD_CLIENT_TO_FAVORITE,
    payload: client,
  }
}