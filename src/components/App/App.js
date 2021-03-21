import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import { pageContents, listData, settings } from '../../data/dataStore'
import Creator from '../Creator/Creator'

class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  }

  addList(title) { //TODO problem to fix 
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
            title,
          }
        ]
      }
    ));
  }

  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div>
      </main>
    )
  }
}

export default App;
