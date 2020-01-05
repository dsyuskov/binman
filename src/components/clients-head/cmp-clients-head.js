import React from 'react';
import './clients-head.scss';

export default function ClientsHead() {
  return (
    <div className="clients__head">
      <div className="clients__title">
        <h2>Ваши соискатели</h2>
        <h4>Всего соискателей: 67</h4>
      </div>
      <div className="clients__buttons">
        <button className="button button--favorite">Избранные</button>
        <button className="button button--add-client">Добавить соискателя</button>
      </div>
    </div>
  )
} 
