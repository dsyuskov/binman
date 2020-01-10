import React from 'react';
import './table-row.scss';

export default function TableRow(props) {
  const { avatar, name, vacansy, phone, email, raitingResume, raitingTets, raitingШnterview } = props.client;
  const rating = Math.round((raitingResume + raitingTets + raitingШnterview)/3);
  return (
    <div className="table-row">
      <div className="table-column">
        {avatar && <img className="table-column__avatar" src={require(`../../data/${avatar}`)} alt="avatar"/>}
        {!avatar && <img className="table-column__avatar" src={require("./no-avatar.svg")} alt="avatar"/>}
        <div className="table-column__wrapper">
          <div className="table-column__h3">{name}</div>
          <div className="table-column__h4">{vacansy}</div>
        </div>
      </div>
      <div className="table-column">
        <div className="table-column__icon">
          {phone.length >= 1 && <img src={require("./phone.svg")} alt="phone"/>}
          {phone.length === 0 && <img src={require("./no-phone.svg")} alt="phone"/>}
        </div>
        <div className="table-column__wrapper">
          {phone.length >= 1 && <div className="table-column__h3">{phone[0]}</div>}
          {phone.length > 1 && <div className="table-column__h4">Показать еще 1 номер</div>}
          {phone.length === 0 && <div className="table-column__none">Телефон не указан</div>}
        </div>
      </div>
      <div className="table-column">
        <div className="table-column__icon">
          {email.length >= 1 && <img src={require("./mail.svg")} alt="e-mail"/>}
          {email.length === 0 && <img src={require("./no-mail.svg")} alt="e-mail"/>}
        </div>
        <div className="table-column__wrapper">
          {email.length >= 1 && <div className="table-column__h3">{email[0]}</div>}
          {email.length > 1 && <div className="table-column__h4">Показать еще 1 e-mail</div>}
          {email.length === 0 && <div className="table-column__none">E-mail не указан</div>}
        </div>
      </div>
      <div className="table-column">
        <div className="table-column__rating">
          {rating === 1 && <img src={require("./rating-1.svg")} alt="rating"/>}
          {rating === 2 && <img src={require("./rating-2.svg")} alt="rating"/>}
          {rating === 3 && <img src={require("./rating-3.svg")} alt="rating"/>}
          {rating === 4 && <img src={require("./rating-4.svg")} alt="rating"/>}
          {rating === 5 && <img src={require("./rating-5.svg")} alt="rating"/>}
          <div className="table-column__h4">Средний балл: <span className="bold">{rating}</span></div>
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