import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from './pages/main/Mainpage'
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
