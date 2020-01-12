import React from 'react';
import './table-row.scss';

export default class TableRow extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      showPhone: [],
      showEmail: [],
    }
  }

  handleShowPhone = () => {
    const { showPhone } = this.state;
    const { phone } = this.props.client;
    this.setState({showPhone: [...this.state.showPhone, phone[showPhone.length] ]});
  }

  handleShowEmail = () => {
    const { showEmail } = this.state;
    const { email } = this.props.client;
    this.setState({showEmail: [...this.state.showEmail, email[showEmail.length] ]});
  }

  componentDidMount() {
    const { phone, email } = this.props.client;
    if (phone.length > 0) {
      this.setState({showPhone: [...this.state.showPhone, phone[0] ]});
    }
    if (email.length > 0) {
      this.setState({showEmail: [...this.state.showEmail, email[0] ]});
    }
  }

  render(){
    const { avatar, name, vacansy, phone, email, raitingResume, raitingTets, raitingInterview, favorite } = this.props.client;
    const rating = Math.round((raitingResume + raitingTets + raitingInterview)/3);
    const { showPhone, showEmail } = this.state;
    return (
      <div className="table-row">
        <div className="table-row__column">
          {avatar && <img className="table-row__avatar" src={require(`data/${avatar}`)} alt="avatar"/>}
          {!avatar && <img className="table-row__avatar" src={require("./icon-no-avatar.svg")} alt="avatar"/>}
          <div className="table-row__wrapper">
            <div className="table-row__data">{name}</div>
            <div className="table-row__subdata">{vacansy}</div>
          </div>
        </div>
        <div className="table-row__column">
          <div className="table-row__icon">
            {showPhone.length >= 1 && <img src={require("./icon-phone.svg")} alt="phone"/>}
            {showPhone.length === 0 && <img src={require("./icon-no-phone.svg")} alt="phone"/>}
          </div>

          <div className="table-row__wrapper">
            { showPhone.map((phone) => { return <div className="table-row__data" key={phone}>{phone}</div>})}
            {phone.length > showPhone.length &&
              <button 
                className="table-row__show"
                onClick={this.handleShowPhone}
              >Показать еще 1 номер</button>}
            {showPhone.length === 0 && <div className="table-row__none">Телефон не указан</div>}
          </div>
        </div>

        <div className="table-row__column">
          <div className="table-row__icon">
            {showEmail.length >= 1 && <img src={require("./icon-mail.svg")} alt="e-mail"/>}
            {showEmail.length === 0 && <img src={require("./icon-no-mail.svg")} alt="e-mail"/>}
          </div>
          <div className="table-row__wrapper">
            {showEmail.map((email) => { return <div key ={email} className="table-row__data">{email}</div>})}
            {email.length > showEmail.length &&
              <button
                className="table-row__show"
                onClick={this.handleShowEmail}
              >Показать еще 1 e-mail</button>}
            {showEmail.length === 0 && <div className="table-row__none">E-mail не указан</div>}
          </div>
        </div>
        <div className="table-row__column">
          <div className="table-row__rating">
            {rating === 1 && <img src={require("./icon-rating-1.svg")} alt="rating"/>}
            {rating === 2 && <img src={require("./icon-rating-2.svg")} alt="rating"/>}
            {rating === 3 && <img src={require("./icon-rating-3.svg")} alt="rating"/>}
            {rating === 4 && <img src={require("./icon-rating-4.svg")} alt="rating"/>}
            {rating === 5 && <img src={require("./icon-rating-5.svg")} alt="rating"/>}
            <div className="table-row__subdata">Средний балл: <span className="table-row__bold">{rating}</span></div>
          </div>
        </div>
        <div className="table-row__column">
          <div className="table-row__buttons">
            <button className="table-row__button table-row__button--resume"/>
            <button className="table-row__button table-row__button--archive"/>
            <button 
              className={`table-row__button ${ favorite ? 'table-row__button--favorite' : 'table-row__button--no-favorite' }`}
            />
          </div>
        </div>
      </div>
    )
  }
}