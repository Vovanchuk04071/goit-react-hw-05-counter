import { createAction } from '@reduxjs/toolkit';

const increment = createAction('counter/increment');
// export const increment = value => ({
//   type: INCREMENT,
//   payload: value,
// });

const decrement = createAction('counter/decrement');
// export const decrement = value => ({
//   type: DECREMENT,
//   payload: value,
// });

export { increment, decrement };
