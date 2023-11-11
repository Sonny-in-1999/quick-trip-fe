import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from './pages/main/Mainpage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
