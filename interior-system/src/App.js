import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/HOME_PAGE/Home';
import Header from './Components/COMMON/HEADER/Header';
import Footer from './Components/COMMON/FOOTER/Footer';
import Auth from './Components/Auth.jsx';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Auth' element={<Auth />}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
