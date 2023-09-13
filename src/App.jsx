import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Notfound from './components/Notfound/Notfound';

let routes=createBrowserRouter([
  
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<Notfound/>},
]},
])



function App() {
  return <>

  <RouterProvider router={routes}/>
  </>
}

export default App;
