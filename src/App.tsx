
import './App.css';
import PeopleList from './PeopleList';
import useCounter from './hooks/useCounter';

function App() {
  const number = useCounter()
  return (
    <div className="App">
      <header className="App-header">
        { number }
        <PeopleList/>
        <PeopleList/>
      </header>
    </div>
  );
}

export default App;
