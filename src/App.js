import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
          <Sidebar/>
          <Dashboard/>
        </div>
    </div>
  );
}

export default App;
