import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { VehicleNavbar } from './Components/VehicleNavbar/VehicleNavbar';
import VehicleContent from './Components/VehicleContent/VehicleContent';
import DatabaseProvider from './Components/VehicleDatabase/Database';
import Home from './Components/VehicleHome/Home';

const App = () => {
  document.title = "REVOS Assignment"
  return (
    <div className="App">
      <DatabaseProvider>
        <BrowserRouter>
          <VehicleNavbar />
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/:vehicle" element={ <VehicleContent /> }/>
          </Routes>
        </BrowserRouter>
      </DatabaseProvider>
    </div>
  );
}

export default App;
