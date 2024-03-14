import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  const dispatch = useDispatch();  //dispatch will be used to invoke actions

  //below 2 gives latest state values
  const counter = useSelector(state=>state.counter.counter);
  const showCounter = useSelector(state=>state.counter.showCounter);


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.incrementBy2(2));
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrementBy2(2));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
      <button className={classes.CounterBtn} onClick={incrementCounterHandler}>Increment</button>
      <button className={classes.CounterBtn} onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
