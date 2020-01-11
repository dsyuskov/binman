import React from 'react';
import './clients-table.scss';

import TableRow from './row/cmp-table-row';

export default function ClientsTable(props) {
  const clients = props.data.map((client) => {
    return <TableRow key={client.id} client={client}/>
  });

  return (
    <div className="table">
      <div className="table-head">
        <div>Соискатель</div>
        <div>Телефон</div>
        <div>E-Mail</div>
        <div>Оценка соискателя</div>
      </div>
      {clients}
    </div>
  )
}
