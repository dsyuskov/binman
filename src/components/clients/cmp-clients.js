import React from 'react';
import './clients.scss';

import ClientHead from '../clients-head/cmp-clients-head';
import ClientsTitle from '../clients-table/cmp-clients-table';

export default function Clients() {
  return (
    <section className="clients">
      <ClientHead />
      <ClientsTitle />
    </section>
  )
}
