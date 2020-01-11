import React from 'react';
import './field-file.scss';

export default class FieldFile extends React.Component {
  constructor() {
    super();
    this.fileInput = React.createRef();
    this.state = {
      file: '',
    }
  }

  handleChangeFile = () => {
    this.setState({file: this.fileInput.current.files[0].name})
  }

  render() {
    const { title, comment } = this.props;
    return(
      <div className=" field field-file">
        <label className="field__title">{title}</label>
        <p className="field__comment">{comment}</p>
        <div className="field-file__container">
          <label 
            className="field-file__button"
          >Выберите файл
            <input 
              className="field-file__control"
              type="file"
              ref={this.fileInput}
              onChange={this.handleChangeFile}
            />
          </label>
          <input
            className="field__input field-file__input"
            type="text"
            value={this.state.file}
            readOnly
            placeholder="Файл не выбран" />
        </div>
      </div>
    )
  }
}