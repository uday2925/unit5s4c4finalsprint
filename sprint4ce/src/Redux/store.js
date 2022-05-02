import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from 'redux-thunk'

import { Logreducer } from "./reducer";

const reducer=combineReducers({Login:Logreducer})

export const store = legacy_createStore(reducer,applyMiddleware(thunk));