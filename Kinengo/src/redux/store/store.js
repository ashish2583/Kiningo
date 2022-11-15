import { createStore,combineReducers,applyMiddleware } from "redux";
import common_reducer from "../reducerd/common_reducer";
import user_reducer from "../reducerd/user_reducer";
import latLong_reducer from "../reducerd/latLong_reducer";
import thunk from 'redux-thunk';

const reducer = combineReducers({
  common : common_reducer,
  user : user_reducer,
  maplocation : latLong_reducer
  })

const store = createStore(reducer,applyMiddleware(thunk));


export default store;





