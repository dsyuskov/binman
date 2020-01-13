import React from  'react';
import { Field } from 'redux-form';

import './field-input.scss';

export default class FieldInput extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: [1],
    }
  }

  handleAddClick = () => {
    const newFields = JSON.parse(JSON.stringify(this.state.fields));
    newFields.push(newFields.length + 1);
    this.setState({fields: newFields})
  }

  render() {
    const { title, placeholder, add, name, required, type, normalize } = this.props;
    const { fields } = this.state;
    return (
      <div className="field field-input">
        <label className="field__title">{title}</label>
        {fields.map((item) => {
          return (
            <Field 
              key={`${name}${item}`}
              className="field__input"
              name={`${name}${item}`}
              component="input"
              type={type}
              required={required}
              placeholder={placeholder}
              normalize={normalize}
            />)
        })}
        {add &&
          <h6
            className="field__add"
            onClick={this.handleAddClick}
          >{add}</h6>}
      </div>
    )
  }
}
