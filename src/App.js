import {BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';



function App() {
  return (
    <>
      <BrowserRouter>
      
      <Routes>
          {/* <Route path="/" element={<Dashboard />} > */}
              <Route index element={<Home />} />
              <Route path="register" element={<Register />} />
              
              <Route path="login" element={<Login />} />
              <Route path="dashboard" element={<Dashboard />} />
              
        {/* </Route> */}
      </Routes>
     
      </BrowserRouter>
    </>
  )
 
}

export default App;
