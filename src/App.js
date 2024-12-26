import './App.css';
import {Route, Routes } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Tv from './Components/Tv/Tv';
import Networks from './Components/Networks/Networks';
import People from './Components/People/People';
import About from './Components/About/About';
import SignIn from './Components/Signin/SignIn';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="App">
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='movies' element={<Movies/>}/>
          <Route path='tv' element={<Tv/>}/>
          <Route path='people' element={<People/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='networks' element={<Networks/>}/>
          <Route path='networks' element={<SignIn/>}/>
          <Route path='networks' element={<Networks/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
