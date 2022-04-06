import logo from './logo.svg';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 style={{color: "turquoise"}}>Counter value: {counter}</h1>
      <button onClick={() => dispatch(increment())} 
      style={{
        backgroundColor: "greenyellow",
        color: "darkblue",
        marginLeft: 15,
        paddingLeft: 10,
        paddingRight: 8,
        fontSize: 20
        }}>+</button>
      <button onClick={() => dispatch(decrement())}
       style={{
        backgroundColor: "greenyellow",
        color: "darkblue",
        marginLeft: 15,
        paddingLeft: 10,
        paddingRight: 12,
        fontSize: 20
        }}>-</button>
      {isLogged ? <h3>Valueable Data Not Seen!</h3> : ''}
    </div>
  );
}

export default App;
