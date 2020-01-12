import { connect } from 'react-redux';
import TableRow from './cmp-table-row';
import { addClientToFavorite } from 'actions/clients';

const mapSateToProps = (state) => {
  return {}
}

const mapDispathToProps = (dispatch) => ({
  addClientToFavorite: (client) => dispatch(addClientToFavorite(client)),
})

export default connect(mapSateToProps, mapDispathToProps)(TableRow);