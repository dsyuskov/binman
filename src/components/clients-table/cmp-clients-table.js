import React from 'react';
import './clients-table.scss';

import TableRow from './cmp-table-row';
import data from '../../data/data';

export default function ClientsTable() {
  const clients = data.map((client) => {
    return <TableRow key={client.id} client={client}/>
  });

  return (
    <div className="table">
      <div className="table__head">
        <div className="table-head___client">Соискатель</div>
        <div className="table-head___phone">Телефон</div>
        <div className="table-head___email">E-Mail</div>
        <div className="table-head___rating">Оценка соискателя</div>
        <div className="table-head___rating"></div>
      </div>
      {clients}
    </div>
  )
}
