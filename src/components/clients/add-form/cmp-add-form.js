import React from 'react';
import { reduxForm } from 'redux-form';

import './add-form.scss';

import FieldRaiting from 'components/fields/field-rating/cmp-field-rating';
import FieldFile from 'components/fields/field-file/cmp-field-file';
import FieldInput from 'components/fields/field-input/cmp-field-input';
import FieldDropDown from 'components/fields/field-dropdown/cmp-field-dropdown';
import normalizePhone from 'components/fields/field-input/normolize-phone';

class AddForm extends React.Component {
  render() {
    const { vacansyList } = this.props;

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
              type="text"
              //required="required"
            />
            <FieldDropDown
              title="Вакансия"
              name="vacansy"
              //required="required"
              placeholder="Выберите вакансию"
              list={vacansyList}
            />
            <FieldFile
              title="Фотография"
              comment="Размер вложения файла не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов jpg, png"
              name="photo"
              accept=".jpg,.png"
            />
          </div>

          <div className="form__section">
            <div className="form__title-section">Контактные данные</div>
            <FieldInput
              title="Номер телефона"
              placeholder="Введите номер телефона"
              add="Добавить еще один номер телефона"
              name="phone"
              type="tel"
              normalize={normalizePhone}
            />
            <FieldInput
              title="E-Mail"
              placeholder="Введите e-mail"
              add="Добавить еще один e-mail"
              name="email"
              type="email"
            />
          </div>

          <div className="form__section">
            <div className="form__title-section">Резюме и результаты тестового задания</div>
            <FieldFile
              title="Резюме"
              comment="Размер вложения файла не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов doc, pdf"
              name="resume"
              accept=".doc,.pdf"
            />
            <FieldFile
              title="Архив с результатами тестового задания"
              comment="Размер вложения файла не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов zip, rar"
              name="test"
              accept=".zip,.rar"
            />
          </div>

          <div className="form__section">
            <div className="form__title-section">Оценка соискателя</div>
            <div className="form__rating-container">
              <FieldRaiting 
                title="Оценка резюме"
                name="raitingResume"
                // required="required"
              />
              <FieldRaiting
                title="Оценка тестового задания"
                name="raitingTets"
                // required="required"
              />
              <FieldRaiting
                title="Оценка собеседования"
                name="raitingInterview"
                // required="required"
              />
            </div>
            </div>

          <div className="form__section">
            <div className="form__button-container">
              <button
                className="form__button form__button--cancel"
                onClick={this.props.onCancelButtonClick}
              >Отменить</button>
              <button 
                className="form__button form__button--add"
                type="submit"
              >Добавить соискателя</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

AddForm = reduxForm({
  form: 'addForm',
})(AddForm)

export default AddForm;
