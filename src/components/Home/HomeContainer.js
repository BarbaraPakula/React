import { connect } from 'react-redux';
import Home from './Home';
import {createActionAddList} from '../../redux/listsRedux';


const mapStateToProps = state=> ({
  // lists: getListsForApp,
  // title: state.app.title,
  // subtitle: state.app.subtitle,
  lists: state.lists,

});

const mapDispatchToProps = (dispatch) => ({
  addList: title => dispatch(createActionAddList({
    // App: props.title,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);