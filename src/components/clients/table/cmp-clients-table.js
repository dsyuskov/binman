import React from 'react';
import './clients-table.scss';

import TableRow from './row/cnt-table-row';

export default function ClientsTable(props) {

  const clients = props.data.filter(item => {
    if (props.isShowFavoritesClients) {
      return item.favorite === props.isShowFavoritesClients
    } else {
      return true;
    }
  });

  const showClients = clients.map((client) => {
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
      {showClients}
      <div className="table__show-more">
        Показать еще
      </div>
    </div>
  )
}
