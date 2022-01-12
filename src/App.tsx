
import './App.css';
import PeopleList from './PeopleList';
import useCounter from './hooks/useCounter';
import { useEffect, useRef } from 'react';

function App() {
  const number = useCounter(9)

  const counter = useRef(2)
  const div = useRef<HTMLDivElement>(null)

  useEffect(() =>{
    setTimeout(() => {
      counter.current = 5
      console.log('o valor de counter foi alterado')
      console.log(div)
      if(div.current)
        div.current.style.backgroundColor = '#09f'
    }, 2000)
  }, [])


  return (
    <div className="App" ref={div}>
        { number }
        <div style={{backgroundColor: 'peachpuff'}}>
        { counter.current }

        </div>
        <PeopleList/>
        <PeopleList/>
    </div>
  );
}

export default App;
