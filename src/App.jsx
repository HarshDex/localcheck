import React, { useState } from 'react';
import { Routes, Route ,Navigate} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CheckDetails from './pages/CheckDetails';
import Ctf from './pages/Ctf';

const App = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const checkisAuthenticated = () => {
      return isAuthenticated;
  };
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="CheckDetails" element={<CheckDetails setIsAuthenticated = {setIsAuthenticated}/>} />
      <Route
        path="ctf-sol"
        element={checkisAuthenticated() ? <Ctf /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
