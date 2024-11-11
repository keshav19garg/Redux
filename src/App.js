import logo from './logo.svg';
import './App.css';
import Createtodo from './components/Createtodo';
import TODO from './components/TODO';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello</h1>
<Createtodo/>
<TODO/>
      </header>
    </div>
  );
}

export default App;
