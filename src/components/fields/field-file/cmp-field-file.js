import React from 'react';
import { Field } from 'redux-form';

import './field-file.scss';


const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({ 
  input: { value: omitValue, onChange, onBlur, ...inputProps }, 
  meta: omitMeta, 
  ...props 
  }) => {
    return (
      <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...props.input}
        {...props}
      />
    );
};

export default class FieldFile extends React.Component {
  constructor() {
    super();
    this.fileInput = React.createRef();
    this.state = {
      file: '',
    }
  }

  handleChangeFile = (file) => {
    this.setState({file: file.name})
  }

  render() {
    const { title, comment, name, accept } = this.props;
    return(
      <div className=" field field-file">
        <label className="field__title">{title}</label>
        <p className="field__comment">{comment}</p>
        <div className="field-file__container">
          <label 
            className="field-file__button"
          >Выберите файл
            <Field
              className="field-file__control"
              type="file"
              component={FileInput}
              name={name}
              //value={null}
              ref={this.fileInput}
              accept={accept}
              onChange={(file) => this.handleChangeFile(file)}
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