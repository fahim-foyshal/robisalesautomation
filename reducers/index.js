import { combineReducers } from 'redux';
import offlineOrder from './OfflineOrder';

const rootReducer = combineReducers({
  offlineOrderdetails:offlineOrder,

});

export default rootReducer;