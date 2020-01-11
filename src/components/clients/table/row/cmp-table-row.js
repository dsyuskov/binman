import React from 'react';
import './table-row.scss';

export default function TableRow(props) {
  const { avatar, name, vacansy, phone, email, raitingResume, raitingTets, raitingШnterview } = props.client;
  const rating = Math.round((raitingResume + raitingTets + raitingШnterview)/3);
  return (
    <div className="table-row">
      <div className="table-row__column">
        {avatar && <img className="table-row__avatar" src={require(`data/${avatar}`)} alt="avatar"/>}
        {!avatar && <img className="table-row__avatar" src={require("./icon-no-avatar.svg")} alt="avatar"/>}
        <div className="table-row__wrapper">
          <div className="table-row__data">{name}</div>
          <div className="table-row__subdata">{vacansy}</div>
        </div>
      </div>
      <div className="table-row__column">
        <div className="table-row__icon">
          {phone.length >= 1 && <img src={require("./icon-phone.svg")} alt="phone"/>}
          {phone.length === 0 && <img src={require("./icon-no-phone.svg")} alt="phone"/>}
        </div>
        <div className="table-row__wrapper">
          {phone.length >= 1 && <div className="table-row__data">{phone[0]}</div>}
          {phone.length > 1 && <button className="table-row__show">Показать еще 1 номер</button>}
          {phone.length === 0 && <div className="table-row__none">Телефон не указан</div>}
        </div>
      </div>
      <div className="table-row__column">
        <div className="table-row__icon">
          {email.length >= 1 && <img src={require("./icon-mail.svg")} alt="e-mail"/>}
          {email.length === 0 && <img src={require("./icon-no-mail.svg")} alt="e-mail"/>}
        </div>
        <div className="table-row__wrapper">
          {email.length >= 1 && <div className="table-row__data">{email[0]}</div>}
          {email.length > 1 && <button className="table-row__show">Показать еще 1 e-mail</button>}
          {email.length === 0 && <div className="table-row__none">E-mail не указан</div>}
        </div>
      </div>
      <div className="table-row__column">
        <div className="table-row__rating">
          {rating === 1 && <img src={require("./icon-rating-1.svg")} alt="rating"/>}
          {rating === 2 && <img src={require("./icon-rating-2.svg")} alt="rating"/>}
          {rating === 3 && <img src={require("./icon-rating-3.svg")} alt="rating"/>}
          {rating === 4 && <img src={require("./icon-rating-4.svg")} alt="rating"/>}
          {rating === 5 && <img src={require("./icon-rating-5.svg")} alt="rating"/>}
          <div className="table-row__subdata">Средний балл: <span className="table-row__bold">{rating}</span></div>
        </div>
      </div>
      <div className="table-row__column">
        <div className="table-row__buttons">
          <button className="table-row__button table-row__button--resume"/>
          <button className="table-row__button table-row__button--archive"/>
          <button className="table-row__button table-row__button--favorite"/>
        </div>
      </div>
    </div>
  )
}