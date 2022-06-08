import logo from './logo.svg';
import './App.css';
import OSlist from './components/oslist';
import Manulist from './components/maufacturelist';

function App() {
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <OSlist />
      <h1>Mobile Manfacturers</h1>
      <Manulist />
    </div>
  );
}

export default App;
