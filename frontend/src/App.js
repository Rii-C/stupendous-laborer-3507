
import './App.css';
import AllRoutes from './components/AllRoutes';
import CardNavbar from './components/Card/CardNavbar';
import { Navbar } from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom'







function App() {
   const location=useLocation()
  //  const res=(location.pathname==="/payment");
  //  const res1=(location.pathname==="/address");
  //  const res2=(location.pathname==="/cart");

 
  return (
    <div className="App">
    
   
{/* {res||res1||res2?<CardNavbar/>:<Navbar/>} */}
 <AllRoutes/>

    </div>
  );
}

export default App;
