import './App.css';
import CreateForm from './components/CreateForm'; 
import SearchData from './components/SearchData'


function App() {
  return (
    <div className="App">
      <h1>Bank Of Flatiron</h1>
      <SearchData/>
      <CreateForm/>
    </div>
  );
}

export default App;
