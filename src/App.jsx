import {
  // BrowserRouter as Router,
  // Routes,
  // Route,
  // Link,
  // Outlet,
  // useNavigate,
  // useParams,
  Navigate
} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate, useParams } from './react-router'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='product' element={<Product />} >
              <Route path=':id' element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );


}

function Layout() {
  // console.log('layout')
  return (
    <div>
      <h1>Layout</h1>
      <Link to='/'>home-link</Link>
      <Link style={{ marginLeft: '10px' }} to='/product'>product-link</Link>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      home
    </div>
  );
}

function Product() {
  // console.log('product')

  return (
    <div>
      <div>product</div>
      <Link to='/product/123'>detail</Link>
      <Outlet />
    </div>
  );
}

function ProductDetail() {
  // console.log('product-detail')

  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>
        productDetail:{params.id}
        {/* ProductDetail */}
      </div>
      {/* <button onClick={() => navigate('/')}>go home</button> */}
      {/* <Navigate to='/'></Navigate> */}
    </>
  );
}

function NoMatch() {
  return (
    <div>
      no match
    </div>
  );
}
export default App;
