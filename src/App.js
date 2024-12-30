import './App.css';
import {Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tv from './Components/Tv/Tv';
import Networks from './Components/Networks/Networks';
import People from './Components/People/People';
import About from './Components/About/About';
import SignIn from './Components/Signin/SignIn';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup/Signup';





function App() {
  return (
    <div className="App d-flex flex-column">
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='movies' element={<Movies/>}/>
          <Route path='tv' element={<Tv/>}/>
          <Route path='people' element={<People/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='networks' element={<Networks/>}/>
          <Route path='signin' element={<SignIn/>}/>
          <Route path='signup' element={<Signup/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
