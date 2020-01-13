import React from 'react';
import { Field } from 'redux-form';
import Star from './cmp-star';

import './field-rating.scss';

export default class FieldRating extends React.Component {
  constructor() {
    super();
    this.state = {
      isEnabled: true,
      mouseRating: 0,
      ratingColor: "#ffa800",
      rating: 0,
      colors: [
        "#ffa800",
        "#ffa800",
        "#ff5d00",
        "#dae700",
        "#abd02d",
        "#67c600",
      ],
    }
  }

  handleMouseOver = (val) => {
    const { isEnabled, mouseRating, colors } = this.state;
    if ( isEnabled && mouseRating !== val) {
      this.setState({mouseRating: val, ratingColor: colors[val]})
    }
  }

  handleMouseOut = () => {
    const { rating } = this.state;
    this.setState({
      mouseRating: rating,
      ratingColor: this.state.colors[rating]});
  }

  handleMouseClick = (rating) => {
    if (this.state.isEnabled ) {
      this.setState({rating: rating});
    }
  }

  componentDidMount() {
    const { rating = 0, isEnabled = true } = this.props;
    this.setState({
      isEnabled: isEnabled,
      mouseRating: rating,
      rating: rating,
      ratingColor: this.state.colors[rating]});
  }

  render() {
    const { name, required, title, isEnabled } = this.props;
    const { mouseRating, ratingColor } = this.state;
    return (
      <div className="field-star">
        <label className="field-star__title">{title}</label>
        <div className="field-star__container">
          <label
            className={isEnabled ? "field-star__item" : "field-star__item field-star__item--disabled"}
            onClick={() => this.handleMouseClick(1)}
            onMouseOver={()=> this.handleMouseOver(1)}
            onMouseOut={()=> this.handleMouseOut()}
          >
            <Field
              className="field-star__control"
              name={name}
              component="input"
              type="radio"
              value="1"
              required={required}
            />
            <Star
              color={ratingColor}
              fill={mouseRating > 0}
            />
          </label>
          <label
            className={isEnabled ? "field-star__item" : "field-star__item field-star__item--disabled"}
            onClick={() => this.handleMouseClick(2)}
            onMouseOver={()=> this.handleMouseOver(2)}
            onMouseOut={()=> this.handleMouseOut()}
          >
            <Field
              className="field-star__control"
              name={name}
              component="input"
              type="radio"
              value="2"
            />
            <Star
              color={ratingColor}
              fill={mouseRating > 1}
            />
          </label>
          <label
            className={isEnabled ? "field-star__item" : "field-star__item field-star__item--disabled"}
            onClick={() => this.handleMouseClick(3)}
            onMouseOver={()=> this.handleMouseOver(3)}
            onMouseOut={()=> this.handleMouseOut()}
          >
            <Field
              className="field-star__control"
              name={name}
              component="input"
              type="radio"
              value="3"
            />
            <Star
              color={ratingColor}
              fill={mouseRating > 2}
            />
          </label>
          <label
            className={isEnabled ? "field-star__item" : "field-star__item field-star__item--disabled"}
            onClick={() => this.handleMouseClick(4)}
            onMouseOver={()=> this.handleMouseOver(4)}
            onMouseOut={()=> this.handleMouseOut()}
          >
            <Field
              className="field-star__control"
              name={name}
              component="input"
              type="radio"
              value="4"
            />
            <Star
              color={ratingColor}
              fill={mouseRating > 3}
            />
          </label>
          <label
            className={isEnabled ? "field-star__item" : "field-star__item field-star__item--disabled"}
            onClick={() => this.handleMouseClick(5)}
            onMouseOver={()=> this.handleMouseOver(5)}
            onMouseOut={()=> this.handleMouseOut()}
          >
            <Field
              className="field-star__control"
              name={name}
              component="input"
              type="radio"
              value="5"
            />
            <Star
              color={ratingColor}
              fill={mouseRating > 4}
            />
          </label>
        </div>
      </div>
    )
  }
}
