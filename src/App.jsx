import './App.css';
import { useState , useEffect } from 'react';
import { Route, Routes , useNavigate } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import LandingPage from './components/Home/LandingPage';
import Home from './components/Home/Home';
import Materials from './components/Materials/Materials';
import Trend from './components/Trend/Trend';
import User from './components/User/User';
import Login from './components/Login/Login';

import { Error404 } from './components/Errors/Errors';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNav, setShowNav] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      setIsLoggedIn(true)
      .then(() => navigate('/'))
    }
  }, [])


  return (
    <div className="min-h-full bg-white dark:bg-black">
      <NavigationBar />
      <main className='md:flex'>
        <Routes>
          <Route path="/" element={(isLoggedIn) ? <Home /> : <LandingPage />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/trend" element={<Trend />} />

          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setShowNav={setShowNav}/>} />
          <Route path="/user/:id" element={<User />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;

