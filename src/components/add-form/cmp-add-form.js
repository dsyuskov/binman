import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './add-form.scss';

import FieldRaiting from '../../components/field-rating/cmp-field-rating';
import FieldFile from '../../components/field-file/cmp-field-file';
import FieldInput from '../../components/field-input/cmp-field-input';

class AddForm extends React.Component {
  render() {
    return (
      <div className="add-form">
        <div className="add-form__shadow">

        </div>
        <form 
          className="form"
          onSubmit={this.props.handleSubmit}
        >
          <button
            className="add-form__close"
            onClick={this.props.onCancelButtonClick}
          />
          <div className="form__section">
            <div className="form__title-form">Добавление соискателя</div>
          </div>
          <div className="form__section">
            <div className="form__title-section">Основные данные</div>

            <FieldInput 
              title="ФИО"
              placeholder="Введите ФИО"
              name="name"
            />
            <FieldInput 
              title="Вакансия"
              placeholder="Выберите вакансию"
              name="vacansy"
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
              name="phone"
            />
            <FieldInput
              title="E-Mail"
              placeholder="Введите e-mail"
              add="Добавить еще один e-mail"
              name="email"
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
              <button
                className="form__button form__button--cancel"
                onClick={this.props.onCancelButtonClick}
              >Отменить</button>
              <button className="form__button form__button--add" type="submit">Добаить соискателя</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

AddForm = reduxForm({
  form: 'addForm'
})(AddForm)

export default AddForm;
