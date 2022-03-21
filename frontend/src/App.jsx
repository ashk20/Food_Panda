import './App.css';
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import Navbar from './components/pages/Navbar';
import Landing from './components/pages/Landing';
import {  Route  } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import PlaceOrder from './components/orders/PlaceOrder';
import RestaurantsList from './components/restaurants/RestaurntsList';
import AdminPage from './components/pages/AdminPage';
import DishList from './components/dishes/DishList';
import Footer from './components/pages/Footer';

function App() {
  
  return (
    <Router>
    <div className="App">
   
    <div className="navbar" >
    <Navbar />
    </div>
   
    <Route exact path="/" component={Landing} />
    <Route exact path='/signup' component={SignUp}></Route>
    <Route exact path='/login' component={Login}></Route>
    <Route exact path='/order' component={PlaceOrder}></Route>
    <Route exact path='/rest' component={RestaurantsList}></Route>
    <Route exact path='/dishes' component={DishList}></Route>
    <Route exact path='/admin' component={AdminPage}></Route>

    <Footer/>
    
     
    </div>
    </Router>
    
  
  );
}

export default App;
