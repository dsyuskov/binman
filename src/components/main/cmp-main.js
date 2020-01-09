import React from 'react';
// import './main.scss';

import Clients from '../clients/cmp-clients';
import AddForm from '../add-form/cmp-add-form';

export default function Main() {
  function handleSubmit(values) {
    window.alert(JSON.stringify(values))
  }
  return (
    <main className="main">
      <AddForm 
        onSubmit={handleSubmit}
      />

    </main>
  )
}

// <Clients />