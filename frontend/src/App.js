
import './App.css';

import AllRoutes from './components/AllRoutes';
import Footer from './components/footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import CardNavbar from './components/Card/CardNavbar';
import { Cart } from './pages/Cart';
import Address from './pages/Address';
import { Payment } from './pages/Payment';





function App() {
  return (
    <div className="App">
   

<Cart/>
<Address/>

<Payment/>

  

   


    </div>
  );
}

export default App;
