import {
  IS_SHOW_ADD_FORM,
  ADD_CLIENT,
  ADD_CLIENT_TO_FAVORITE,
  IS_SHOW_FAVORITES_CLIENTS,
 } from 'actions/clients';
import { clientList, vacansyList } from 'data/data';

const initState = {
  isShowAddForm: false,
  isShowFavoritesClients: false,
  clientList,
  vacansyList,
}

export default function(state = initState, action) {
  switch (action.type) {
    case IS_SHOW_ADD_FORM: {
      return {
        ...state,
        isShowAddForm: action.payload,
      }
    }
    case IS_SHOW_FAVORITES_CLIENTS: {
      return {
        ...state,
        isShowFavoritesClients: !state.isShowFavoritesClients,
      }
    }
    case ADD_CLIENT_TO_FAVORITE: {
      const { payload: newItem } = action;
      return {
        ...state,
        clientList: state.clientList.map(item => {
          if(item.id === newItem.id) {
            return {
              ...item,
              favorite: !newItem.favorite,
            }
          }
          return item;
        })
      };
    }
    case ADD_CLIENT: {
      return {
        ...state,
        clientList: [...state.clientList, action.payload],
      }
    }
    default:
  }
  return state;
}