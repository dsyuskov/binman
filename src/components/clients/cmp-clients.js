import React from 'react';
import './clients.scss';
import data from 'data/data';

import ClientHead from './head/cmp-clients-head';
import ClientsTable from './table/cmp-clients-table';
import AddForm from './add-form/cmp-add-form';

export default class Clients extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
    }
  }

  handleAddButtonClick = () => {
    this.props.showAddForm(true);
  }
  
  handleOpenAddFormButtonClick = () => {
    this.props.showAddForm(true);
  }

  handleCancelButtonClick = () => {
    this.props.showAddForm(false);
  }

  componentDidMount() {

  }

  handleSubmit = (values) => {
    this.props.showAddForm(false);
    // alert(JSON.stringify(values))
  }

  render() {
    const { isShowAddForm } = this.props;
    const { data } = this.state;
    return (
      <section className="clients">
        <ClientHead 
          allClients={data.length}
          onOpenAddFormButtonClick={this.handleOpenAddFormButtonClick}
        />
        <ClientsTable 
          data={ data }
        />
        {isShowAddForm &&
          <AddForm
            onCancelButtonClick={this.handleCancelButtonClick}
            onSubmit={(values) => this.handleSubmit(values)}
          />}
      </section>
    )
  }
}
