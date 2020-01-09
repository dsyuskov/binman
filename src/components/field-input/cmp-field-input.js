import React from  'react';
import './field-input.scss';

export default class FieldInput extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: [''],
    }
  }

  handleAddClick = () => {
    const newFields = JSON.parse(JSON.stringify(this.state.fields));
    newFields.push('');
    this.setState({fields: newFields})
  }

  render() {
    const { title, placeholder, add} = this.props;
    const { fields } = this.state;
    return (
      <div className="field-input">
        <label className="field-input__title">{title}</label>
        {fields.map((field) => {
          return <input key="field" className="field-input__input" name="" type="text" placeholder={placeholder} />
        })}
        {add && 
          <h6
            className="field-input__add"
            onClick={this.handleAddClick}
          >{add}</h6>}
      </div>
    )
  }
}