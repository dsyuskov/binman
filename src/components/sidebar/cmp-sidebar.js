import React from 'react';
import './sidebar.scss';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu__item"><img src={require("./home.svg")} alt="home"/></li>
        <li className="menu__item menu__item--selected"><img src={require("./clients.svg")} alt="clients"/></li>
        <li className="menu__item"><img src={require("./reports.svg")} alt="reports"/></li>
      </ul>
    </div>
  )
}
