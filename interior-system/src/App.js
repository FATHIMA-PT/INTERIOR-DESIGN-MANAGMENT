import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth';
import Home from './Components/Home';

function App() {
  return (
    <>
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
