import {combinedReducers} from 'redux';
import apps from './apps';

const rootReducer = combinedReducers({
  apps,
});

// initial store
// {}

// apps reducer
// {
//  apps: []
// }

export default rootReducer;