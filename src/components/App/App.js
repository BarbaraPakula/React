import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer';
// import { settings } from '../../data/dataStore';  //TODO listData pageContent
// import Creator from '../Creator/Creator';
// import Bar from '../Bar/Bar';

class App extends React.Component {
  // state = {
  //   lists: this.props.lists || [],
  // }

  static propTypes = {
    // lists: PropTypes.string,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }

  // addList(title) {
  //   this.setState(state => (
  //     {
  //       lists: [
  //         ...state.lists,
  //         {
  //           key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
  //           title,
  //           description: 'Interesting things I want to check out!',
  //           image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={styles.component}>
        {/* <Bar /> */}
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/* <div className={styles.lists}>
          {this.state.lists.map(({ key, ...listProps }) => (
            <List key={key} {...listProps} />
          ))}
        </div> */}
        {/* <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div> */}

      </main>
    );
  }
}

export default App;
