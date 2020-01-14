import React from 'react';
import './clients.scss';

import ClientHead from './head/cmp-clients-head';
import ClientsTable from './table/cmp-clients-table';
import AddForm from './add-form/cmp-add-form';

export default class Clients extends React.Component {

  handleAddButtonClick = () => {
    this.props.showAddForm(true);
  }
  
  handleOpenAddFormButtonClick = () => {
    this.props.showAddForm(true);
  }

  handleCancelButtonClick = () => {
    this.props.showAddForm(false);
  }

  handleFavoriteButtonClick = () => {
    this.props.showFavoritesClients();
  }

  loadAvatar = (file) => {
    return new Promise((resolve)=>{
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result)
      };
      reader.readAsDataURL(file);
    })
  }

  createClient = (values) => {
    const id = `f${(+new Date()).toString(16)}`;
    const newClient = {};
    newClient.id = id;
    newClient.name = values.name1;
    newClient.vacansy = values.vacansy;
    newClient.phone = [];
    newClient.email = [];
    newClient.raitingResume = +values.raitingResume;
    newClient.raitingTets = +values.raitingTets;
    newClient.raitingInterview = +values.raitingInterview;
    newClient.favorite = false;

    for (let item in values) {
      if (item.includes('phone')) {
        newClient.phone.push(values[item]);
      }

      if (item.includes('email')) {
        newClient.email.push(values[item]);
      }
    }

    if (values.photo && values.photo.type.match('image.*')) {
      this.loadAvatar(values.photo)
      .then( (resolve) => {
        newClient.avatar = resolve
        this.props.addClient(newClient)
      })
    } else {
      this.props.addClient(newClient);
    }
  }

  handleSubmit = (values) => {
    this.createClient(values);
    this.props.showAddForm(false);
  }

  render() {
    const { isShowAddForm, clientList, vacansyList, isShowFavoritesClients } = this.props;
    return (
      <section className="clients">
        <ClientHead
          allClients={clientList.length}
          isShowFavoritesClients={isShowFavoritesClients}
          onOpenAddFormButtonClick={this.handleOpenAddFormButtonClick}
          onFavoriteButtonClick={this.handleFavoriteButtonClick}
        />
        <ClientsTable
          data={clientList}
          isShowFavoritesClients={isShowFavoritesClients}
        />
        {isShowAddForm &&
          <AddForm
            onCancelButtonClick={this.handleCancelButtonClick}
            onSubmit={(values) => this.handleSubmit(values)}
            vacansyList={vacansyList}
          />}
      </section>
    )
  }
}
