import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// TODO: any type
export default function createRootReducer(history: any) {
  return combineReducers({
    router: connectRouter(history)
  });
}
