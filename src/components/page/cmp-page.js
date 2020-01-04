import React from 'react';
import './page.scss';
import Header from '../header/cmp-header';
import Sidebar from '../sidebar/cmp-sidebar';

export default class Page extends React.Component {

  render() {
    return (
    <div>
      <Header/>
      <main>
        <Sidebar/>
      </main>
    </div>
    )
  }
}