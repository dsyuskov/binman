import React from 'react';
import './add-form.scss';

import FieldRaiting from '../../components/field-rating/cmp-field-rating';
import FieldFile from '../../components/field-file/cmp-field-file';

export default class AddForm extends React.Component {

  render() {
    return (
      <div className="form">
        <div className="form__section">
          <div className="form__title-form">Добавление соискателя</div>
        </div>
        <div className="form__section">
          <div className="form__title-section">Основные данные</div>

          <div className="field">
            <label className="field__title">ФИО</label>
            <input className="field__input" name="" type="text" placeholder="Введите ФИО" />
          </div>
          <div className="field">
            <label className="field__title">Вакансия</label>
            <input className="field__input field__dropdown" name="" type="select" placeholder="Выберите вакансию" />
          </div>

          <FieldFile
            title="Фотография"
            comment="Размер вложения файла не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов jpg, png"
          />
        </div>

        <div className="form__section">
          <div className="form__title-section">Контактные данные</div>
          <div className="field">
            <label className="field__title">Номер телефона</label>
            <input className="field__input" name="" type="text" placeholder="Введите номер телефона" />
            <h6 className="field__add">Добавить еще один номер телефона</h6>
          </div>
          <div className="field">
            <label className="field__title">E-Mail</label>
            <input className="field__input field__dropdown" name="" type="text" placeholder="Введите e-mail" />
            <h6 className="field__add">Добавить еще один e-mail</h6>
          </div>
        </div>

        <div className="form__section">
          <div className="form__title-section">Резюме и результаты тестового задания</div>
          <FieldFile
            title="Резюме"
            comment="Размер вложения файла не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов doc, pdf"
          />
          <FieldFile
            title="Архив с результатами тестового задания"
            comment="Размер вложения файла не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов zip, rar"
          />
        </div>

        <div className="form__section">
          <div className="form__title-section">Оценка соискателя</div>
            <div className="field__rating-container">
              <FieldRaiting 
                title="Оценка резюме"
              />
              <FieldRaiting 
                title="Оценка тестового задания"
              />
              <FieldRaiting
                title="Оценка собеседования"
              />
            </div>
          </div>

        <div className="form__section">
          <div className="form__button-container">
            <button className="form__button form__button--cancel">Отменить</button>
            <button className="form__button form__button--add">Добаить соискателя</button>
          </div>
        </div>
      </div>
    )
  }
}