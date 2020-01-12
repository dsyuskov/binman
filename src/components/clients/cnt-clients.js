import { connect } from 'react-redux';
import Clients from './cmp-clients';
import { showAddForm, addClient, showFavoritesClients } from 'actions/clients';

const mapStateToProps = (state) => {
  const { isShowAddForm, clientList, vacansyList, isShowFavoritesClients } = state.clients;
  return {
    isShowAddForm,
    clientList,
    vacansyList,
    isShowFavoritesClients,
  }
}

const mapDispathToProps = (dispath) => ({
  showAddForm: (isShowAddForm) => dispath(showAddForm(isShowAddForm)),
  showFavoritesClients: (isShowFavoriteClients) => dispath(showFavoritesClients(isShowFavoriteClients)),
  addClient: (client) => dispath(addClient(client)),
})

export default connect(mapStateToProps, mapDispathToProps)(Clients);