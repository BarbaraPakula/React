import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Bar from '../Bar/Bar';
import Search from '../Search/SearchContainer';

class App extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    addList: PropTypes.func,
  }

  render() {
    const { title, subtitle, lists, addList } = this.props;
    return (
      <main className={styles.component}>
        <Bar />
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={addList} />
        </div>

      </main>
    );
  }
}

export default App;
