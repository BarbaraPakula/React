import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getSearchedCardsForColumn} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getSearchedCardsForColumn(state, props.match.params.searchString),
});

export default connect(mapStateToProps)(SearchResults);
