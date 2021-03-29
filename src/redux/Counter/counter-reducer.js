import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './counter-actions';

const valueReducer = createReducer(5, {
  [increment]: (state, { payload }) => state + payload,
  [decrement]: (state, { payload }) => state - payload,
});

// const valueReducer = (state = 5, { type, payload }) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + payload;
//     case types.DECREMENT:
//       return state - payload;
//     default:
//       return state;
//   }
// };

const stepReducer = (state = 3, action) => state;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
