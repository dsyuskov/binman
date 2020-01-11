import { connect } from 'react-redux';
import Clients from './cmp-clients';
import { showAddForm } from 'actions/addForm';

const mapStateToProps = (state) => {
  const { isShowAddForm } = state.addForm;
  return {
    isShowAddForm,
  }
}

const mapDispathToProps = (dispath) => ({
  showAddForm: (isShowAddForm) => dispath(showAddForm(isShowAddForm)),
})

export default connect(mapStateToProps, mapDispathToProps)(Clients);