import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import PreNavBar from './Components/PreNavBar';


function App() {
  return (
    <div>
    <BrowserRouter>
    <PreNavBar/>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
