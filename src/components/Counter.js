import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state=>state.counter);


  const toggleCounterHandler = () => {

  };

  const incrementCounterHandler = () => {
    dispatch({type: 'INCREMENTBY2'});
  };

  const decrementCounterHandler = () => {
    dispatch({type: 'DECREMENTBY2'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
      <button className={classes.CounterBtn} onClick={incrementCounterHandler}>Increment</button>
      <button className={classes.CounterBtn} onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
