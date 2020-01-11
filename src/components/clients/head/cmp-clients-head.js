import React from 'react';
import './clients-head.scss';

export default function ClientsHead(props) {
  return (
    <div className="clients-head">
      <div className="clients-head__title-container">
        <h2 className="clients-head__title">Ваши соискатели</h2>
        <p className="clients-head__subtitle">Всего соискателей: {props.allClients}</p>
      </div>
      <div className="clients-head__buttons-container">
        <button 
          className="button button--favorite"
          onClick={props.onFavoriteButtonClick}
        >Избранные</button>
        <button
          className="button button--add-client"
          onClick={props.onOpenAddFormButtonClick}
        >Добавить соискателя</button>
      </div>
    </div>
  )
} 
