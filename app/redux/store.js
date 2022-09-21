import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    reducer: reducer
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;