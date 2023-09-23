import React from 'react';
import { Register } from './Components/Register/Register';
import { Login } from './Components/Login/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
          <BrowserRouter>
          <Routes>
          <Route exact path="login/*" element={<Login />} />
          <Route path="/*" element={<Register />}/>
          </Routes>
          
          </BrowserRouter>
  );
}

export default App;
