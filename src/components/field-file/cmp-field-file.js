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
      <div className="field-file">
        <label className="field-file__title">{title}</label>
        <h6 className="field-file__comment">{comment}</h6>
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
            className="field-file__input"
            type="text"
            value={this.state.file}
            readOnly
            placeholder="Файл не выбран" />
        </div>
      </div>
    )
  }
}