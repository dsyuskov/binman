import React from 'react';
import './field-rating.scss';

export default class FieldRating extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseRating: 0,
      rating: 0,
    }
  }

  handleStarMouseOver = (rating) => {
    this.setState({mouseRating: rating})
  }

  handleStarMouseOut = () => {
    const rating = this.state.rating;
    this.setState({mouseRating: rating})
  }

  handleStarMouseClick = (rating) => {
    this.setState({rating: rating});
    this.props.onChange(rating);
  }

  render() {
    const { mouseRating } = this.state;
    const { title } = this.props;
    return (
      <div className="field-star">
        <label className="field-star__title">{title}</label>
        <div className="field-star__container">
          <img
            className="field-star__item"
            src={mouseRating > 0 ? require(`./rating-${mouseRating}-full.svg`) : require(`./rating-${mouseRating}.svg`)} alt="star"
            onMouseOver={() => this.handleStarMouseOver(1)}
            onMouseOut={this.handleStarMouseOut}
            onClick={() => this.handleStarMouseClick(1)}
          />
          <img
            className="field-star__item"
            src={mouseRating > 1 ? require(`./rating-${mouseRating}-full.svg`) : require(`./rating-${mouseRating}.svg`)} alt="star"
            onMouseOver={() => this.handleStarMouseOver(2)}
            onMouseOut={this.handleStarMouseOut}
            onClick={() => this.handleStarMouseClick(2)}
          />
          <img 
            className="field-star__item" 
            src={mouseRating > 2 ? require(`./rating-${mouseRating}-full.svg`) : require(`./rating-${mouseRating}.svg`)} alt="star"
            onMouseOver={() => this.handleStarMouseOver(3)}
            onMouseOut={this.handleStarMouseOut}
            onClick={() => this.handleStarMouseClick(3)}
          />
          <img 
            className="field-star__item" 
            src={mouseRating > 3 ? require(`./rating-${mouseRating}-full.svg`) : require(`./rating-${mouseRating}.svg`)} alt="star"
            onMouseOver={() => this.handleStarMouseOver(4)}
            onMouseOut={this.handleStarMouseOut}
            onClick={() => this.handleStarMouseClick(4)}
          />
          <img 
            className="field-star__item" 
            src={mouseRating > 4 ? require(`./rating-${mouseRating}-full.svg`) : require(`./rating-${mouseRating}.svg`)} alt="star"
            onMouseOver={() => this.handleStarMouseOver(5)}
            onMouseOut={this.handleStarMouseOut}
            onClick={() => this.handleStarMouseClick(5)}
          />
        </div>
      </div>
    )
  }
}
