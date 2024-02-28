import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './Components/HOME_PAGE/Home';
import Header from './Components/COMMON/HEADER/Header';
import Footer from './Components/COMMON/FOOTER/Footer';

import Auth from './Components/Auth';
import Home from './Components/Home';
import Home_page from './Components/HOME_PAGE/Home_page';
import Gallery from './Components/GALLERY/Gallery';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home_page/>} />

      <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
    <Footer/>

      {/* <Route path='/Auth' element={<Auth />}/> */}
    {/* </Routes> */}
    {/* <Footer/> */}
    </>
  );
}

export default App;
