import './App.css';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProductDetail from './components/productDetail';
import Login from './components/Login';

function App() {

  const queryPath = window.location.search.slice(1);

  if (queryPath) {
    // If there's a path in the query string, push it to history
    window.history.replaceState({}, '', queryPath);
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/product_dashboard' element={<Login />} index/>
          <Route path='/product' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
