import { combineReducers } from 'redux';
import apps from './apps';

const rootReducer = combineReducers({
  apps,
});

// initial store
// {}

// apps reducer
// {
//  apps: []
// }

export default rootReducer;