import { createStore } from 'redux';
import CounterReducer from './Counter-Reducer';

const store = createStore(CounterReducer);

export default store;
