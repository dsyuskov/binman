import React from 'react';
import './logo.scss';

export default function Logo() {
  return (
    <div className="logo">
      <img src={require("./logo.png")} alt="logo-binman"/>
    </div>
  )
}
