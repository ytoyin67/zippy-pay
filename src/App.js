import {BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';


function App() {
  return (
    <>
      <BrowserRouter>
       <Header />
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
