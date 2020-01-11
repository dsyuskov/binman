import React from 'react';
import { Field } from 'redux-form';

import './field-dropdown.scss';

export default function FieldDropDown(props) {
  const { title, name, required, placeholder, list } = props;
  const option = list.map(item => {
    return <option key={item.id} value={item.value}>{item.value}</option>
  });

  return (
    <div className="field field-dropdown">
      <label className="field__title">{title}</label>
      <Field
        className="field__input field__dropdown"
        component="select"
        name={name}
        required={required}
      >
        <option value="" disabled>{placeholder}</option>
        {option}
      </Field>
    </div>
    )
}

