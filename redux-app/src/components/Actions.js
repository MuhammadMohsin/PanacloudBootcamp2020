export const increment = 'INCREMENT';
export const decrement = 'DECREMENT';

export const incrementAction = () => ({
  type: increment,
});

export const decrementAction = () => ({
  type: decrement,
});
