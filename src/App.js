import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from './pages/main/Mainpage'
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import PackageDetail from './pages/Details/PackageDetail';

function App() {
  const el = 1
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/bundle/:id' element={<PackageDetail />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
