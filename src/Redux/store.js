import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import bookReducers from "./Reducers/bookReducers";
import thunk from 'redux-thunk';

const combinedReducer = combineReducers({
    books: bookReducers,
})

const middleWare = applyMiddleware(thunk)

export const store = createStore(combinedReducer, composeWithDevTools(middleWare))