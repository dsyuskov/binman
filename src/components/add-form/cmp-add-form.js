import React from 'react';
import './add-form.scss';

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

          <div className="field">
            <label className="field__title">Фотография</label>
            <h6 className="field__comment">Размер вложения файла не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов jpg, png</h6>
            <div className="field__file-container">
              <label className="field__button">Выберите файл
                <input className="field__file-control" type="file" />
              </label>
              <input className="field__input field__file" name="" type="text" placeholder="Файл не выбран" />
            </div>
          </div>
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

          <div className="field">
            <label className="field__title">Резюме</label>
            <h6 className="field__comment">Размер вложения файла не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов doc, pdf</h6>
            <div className="field__file-container">
              <label className="field__button">Выберите файл
                <input className="field__file-control" type="file" />
              </label>
              <input className="field__input field__file" name="" type="text" placeholder="Файл не выбран" />
            </div>
          </div>
          
          <div className="field">
            <label className="field__title">Архив с результатами тестового задания</label>
            <h6 className="field__comment">Размер вложения файла не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов zip, rar</h6>
            <div className="field__file-container">
              <label className="field__button">Выберите файл
                <input className="field__file-control" type="file" />
              </label>
              <input className="field__input field__file" name="" type="text" placeholder="Файл не выбран" />
            </div>
          </div>
        </div>

        <div className="form__section">
          <div className="form__title-section">Оценка соискателя</div>
            <div className="field__rating-container">
              <div className="field__rating">
                <label className="field__title">Оценка резюме</label>
                <div className="field__star-container">
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                </div>
              </div>
              <div className="field__rating">
                <label className="field__title">Оценка тестового задания</label>
                <div className="field__star-container">
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                </div>
              </div>
              <div className="field__rating">
                <label className="field__title">Оценка собеседования</label>
                <div className="field__star-container">
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                  <img className="field__star" src={require("./rating-1.svg")} alt="star"/>
                </div>
              </div>
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