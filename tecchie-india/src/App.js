import './App.css';
import {BrowserRouter,Routes,  Route} from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import PreNavBar from './Components/PreNavBar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<PreNavBar/>}></Route>
    <Route path="/sign-in" element={<SignIn/>}></Route>
    <Route path="/sign-up" element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
  
  
  export default App;
