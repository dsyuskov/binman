import React from 'react';
import './table-row.scss';

export default function TableRow() {
  return (
    <div className="table-row">
      <div className="table-column">
        <img className="table-column__avatar" src={require("./avatar.png")} alt="avatar"/>
        <div className="table-column__wrapper">
          <div className="table-column__h3">Бинман Иван Натанович</div>
          <div className="table-column__h4">Вакансия Full-stack разработчик</div>
        </div>
      </div>
      <div className="table-column">
        <div className="table-column__icon">
          <img src={require("./phone.svg")} alt="phone"/>
        </div>
        <div className="table-column__wrapper">
          <div className="table-column__h3">+7 (900) 800-70-60</div>
          <div className="table-column__h4">Показать еще 1 номер</div>
        </div>
      </div>
      <div className="table-column">
        <div className="table-column__icon">
          <img src={require("./mail.svg")} alt="email"/>
        </div>
        <div className="table-column__wrapper">
          <div className="table-column__h3">ioan@binman.ru</div>
          <div className="table-column__h4">Показать еще 1 e-mail</div>
        </div>
      </div>
      <div className="table-column">
        <div className="table-column__rating">
          <img src={require("./rating-5.svg")} alt="rating"/>
          <div className="table-column__h4">Средний балл: <span className="bold">5.0</span></div>
        </div>
      </div>
      <div className="table-column">
        <div className="table-column__buttons">
          <button className="table-column__button table-column__button--resume"/>
          <button className="table-column__button table-column__button--archive"/>
          <button className="table-column__button table-column__button--favorite"/>
        </div>
      </div>
    </div>
  )
}