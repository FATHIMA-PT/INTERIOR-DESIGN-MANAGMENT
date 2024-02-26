import { Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Home from './Components/HOME_PAGE/Home';
import Header from './Components/COMMON/HEADER/Header';
import Footer from './Components/COMMON/FOOTER/Footer';
import Auth from './Components/Auth.jsx';


=======
import Auth from './Components/Auth';
import Home from './Components/Home';
>>>>>>> parent of ff77391 (home architectural designs)

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Auth' element={<Auth />}/>
    </Routes>
    <Footer/>
      <Routes>
        <Route path='/' />
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/home' element={<Home/>}/>

      </Routes>
    </>
  );
}

export default App;
