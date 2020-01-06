import React from 'react';
import './clients.scss';
import data from '../../data/data';

import ClientHead from '../clients-head/cmp-clients-head';
import ClientsTable from '../clients-table/cmp-clients-table';

export default class Clients extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
    }
  }

  handleFavoriteButtonClick = () => {
    console.log('111');
  }

  componentDidMount() {
    this.setState({data: data});
  }

  render() {
    return (
      <section className="clients">
        <ClientHead 
          allClients={data.length}
          onClick={this.handleFavoriteButtonClick}
        />
        <ClientsTable />
      </section>
    )
  }
}
