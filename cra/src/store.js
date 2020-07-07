import {createStore, combineReducers} from 'redux';

const count = (state = 0, action) => {
  console.log('reducer count', state);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

export default createStore(combineReducers({ count }));