import React from 'react';
import './clients-table.scss';

import TableRow from './cmp-table-row';

export default function ClientsTable() {
  return (
    <div className="table">
      <div className="table__head">
        <div className="table-head___client">Соискатель</div>
        <div className="table-head___phone">Телефон</div>
        <div className="table-head___email">E-Mail</div>
        <div className="table-head___rating">Оценка соискателя</div>
      </div>
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  )
}
