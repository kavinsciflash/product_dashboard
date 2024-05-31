import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProductDetail from './components/productDetail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} index/>
          <Route path='/product' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
