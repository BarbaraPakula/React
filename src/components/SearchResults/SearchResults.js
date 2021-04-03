import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';


const SearchResults = props => (
  <Container>
    <section className={styles.component}>
      <h3 className={styles.title}>{props.title}
        <span className={styles.icon}>
          <Icon name={props.icon} />
        </span>
      </h3>
      <div className={styles.cards}>
        {props.cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </section>
  </Container>
);

SearchResults.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  icon: PropTypes.string,
};
SearchResults.defaultProps = {
  icon: settings.defaultColumnIcon,
  title: 'Search Results',
};

export default SearchResults;