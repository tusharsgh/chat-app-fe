import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import './App.css';
import {ChatIcon} from "./svg";
import Home from "./pages/home";
import Registration from './pages/registration';
import Login from "./pages/login";
import { logout } from './features/userSlice';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch =useDispatch( );
  return (
  <div className="dark">
    <button onClick={()=>{ dispatch(logout());}}>logout</button>
  <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/registration" element={<Registration/>}/>
    <Route exact path="/login" element={<Login/>}/>
    </Routes>
   </Router>
   </div>
  );
}

export default App;
