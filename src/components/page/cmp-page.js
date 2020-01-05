import React from 'react';
import './page.scss';
import Header from '../header/cmp-header';
import Sidebar from '../sidebar/cmp-sidebar';
import Main from '../main/cmp-main';

export default class Page extends React.Component {

  render() {
    return (
    <div className="page">
      <Header/>
      <Sidebar/>
      <Main />
    </div>
    )
  }
}