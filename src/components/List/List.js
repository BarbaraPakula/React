import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column'

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    source: PropTypes.string.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageT={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='Tokio' />
          <Column title='Ubuntu' />
          <Column title='Work' />
        </div>
      </section>
    )
  }
}

export default List;