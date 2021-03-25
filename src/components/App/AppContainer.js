import { connect } from 'react-redux';
import App from './App';
import {createActionAddList, getListsForApp} from '../../redux/listsRedux';


const mapStateToProps = (state, props)=> ({
  lists: getListsForApp(state, props.id),
  // title: state.app.title,
  // subtitle: state.app.subtitle,
  // lists: state.lists,
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddList({
    AppId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);