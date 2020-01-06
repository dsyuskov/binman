import React from 'react';
import './clients-head.scss';

export default function ClientsHead(props) {
  console.log(props);
  return (
    <div className="clients__head">
      <div className="clients__title">
        <h2>Ваши соискатели</h2>
        <h4>Всего соискателей: {props.allClients}</h4>
      </div>
      <div className="clients__buttons">
        <button 
          className="button button--favorite"
          onClick={props.onClick}
        >Избранные</button>
        <button className="button button--add-client">Добавить соискателя</button>
      </div>
    </div>
  )
} 
