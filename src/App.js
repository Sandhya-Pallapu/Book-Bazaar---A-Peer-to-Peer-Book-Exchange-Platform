import React from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    
    <Router>
      <Navbar/>
    <div className="font-sans bg-gray-100 min-h-screen">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
