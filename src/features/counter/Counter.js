import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
  incrementAsync,
  selectCount,
  fetchRandomNumber,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const counter = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  if (counter.isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{counter.value}</span>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className={styles.button}
          aria-label='Reset value'
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
          Add Amount
        </button>
        <button className={styles.button} onClick={() => dispatch(fetchRandomNumber())}>
          Fetch from server
        </button>
      </div>
    </div>
  );
}
