import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/HOME_PAGE/Home';
import Header from './Component/COMMON/HEADER/Header';
import Footer from './Component/COMMON/FOOTER/Footer';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
