
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,reset } from './features/Counter/counterSlice';
function App() {

  const count=useSelector((state)=> state.counter.value);

  const dispatch=useDispatch();



 function handleincrementclick(){
      dispatch(increment());
    }
    function handledecrementclick(){
      dispatch(decrement());
    }
    function handleresetclick(){
      dispatch(reset());
    }

  return (
   
    <div className="container">
      <button onClick={handleincrementclick}>+</button>
      <p>Count:{count}</p>
      <button onClick={handledecrementclick}>-</button>
      <br />
      <br />
      <button onClick={handleresetclick}>Reset</button>
    </div>
     
    
  )
}

export default App
