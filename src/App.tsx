

import { useReducer } from 'react';
import './App.css';

type Action = 
  { type: 'INCREMENT' , payload: number } | 
  { type: 'DECREMENT' }
interface InitialState {
  count: number
}

const initialState: InitialState = {
  count: 1
}

function reducer(state: InitialState, action: Action): InitialState {

  switch (action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.payload
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state  
  }
  
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App" >
       <div style={{backgroundColor: 'peachpuff'}}>
         { state.count }
       </div>

       <button onClick={() => {
         dispatch({type: 'INCREMENT', payload: 2})
       }}>
         somar
       </button>
       <button onClick={() => {
         dispatch({type: 'DECREMENT'})
       }}>
         diminuir
       </button>
    </div>
  );
}

export default App;
