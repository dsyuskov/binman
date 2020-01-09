import React from 'react';
import './add-form.scss';

import FieldRaiting from '../../components/field-rating/cmp-field-rating';
import FieldFile from '../../components/field-file/cmp-field-file';
import FieldInput from '../../components/field-input/cmp-field-input';

export default class AddForm extends React.Component {

  render() {
    return (
      <div className="form">
        <div className="form__section">
          <div className="form__title-form">Добавление соискателя</div>
        </div>
        <div className="form__section">
          <div className="form__title-section">Основные данные</div>

          <FieldInput 
            title="ФИО"
            placeholder="Введите ФИО"
          />
          <FieldInput 
            title="Вакансия"
            placeholder="Выберите вакансию"
          />
          <FieldFile
            title="Фотография"
            comment="Размер вложения файла не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов jpg, png"
          />
        </div>

        <div className="form__section">
          <div className="form__title-section">Контактные данные</div>
          <FieldInput 
            title="Номер телефона"
            placeholder="Введите номер телефона"
            add="Добавить еще один номер телефона"
          />
          <FieldInput
            title="E-Mail"
            placeholder="Введите e-mail"
            add="Добавить еще один e-mail"
          />
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