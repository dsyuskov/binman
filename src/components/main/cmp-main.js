import React from 'react';
import './main.scss';

import Clients from '../clients/cnt-clients';

export default function Main() {
  function handleSubmit(values) {
    window.alert(JSON.stringify(values))
  }
  return (
    <main className="main">
      <Clients />
    </main>
  )
}
