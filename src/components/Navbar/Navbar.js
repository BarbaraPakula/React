import React from 'react';
import { listData } from '../../data/dataStore';
import styles from './Navbar.scss';
import ReactHtmlParser from 'react-html-parser';

class Navbar extends React.Component {

  render() {

    const Columns = ['Books', 'Movies', 'Games']; //TODO jak wycięgnąć dane z d

    const ColumnsLists = Columns.map(Column => <li key={Column}>{Column}</li>);

    return (
      <div className={styles.Navbar}>
        <ol><li>{ReactHtmlParser(listData.title)}</li></ol><ul>{ColumnsLists}</ul>
      </div>
    );
  }
}

export default Navbar;
