import{BrowserRouter as Router,Routes,Route,Navigate}from 'react-router-dom';
import './App.css';
import {ChatIcon} from "./svg";
import Home from "./pages/home";
import Registration from './pages/registration';
import Login from "./pages/login";
import { logout } from './features/userSlice';
import { useDispatch ,useSelector} from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { token } = user;
  return (
  <div className="dark">

  <Router>
    <Routes>
    <Route
              exact
              path="/"
              element={
                token ?  <Home />:<Navigate to="/login"  />
              }
            />
    <Route
              exact
              path="/login"
              element={!token ? <Login /> : <Navigate to="/" />}
            />
            <Route
              exact
              path="/registration"
              element={!token ? <Registration /> : <Navigate to="/" />}
            />
    </Routes>
   </Router>
   </div>
  );
}

export default App;