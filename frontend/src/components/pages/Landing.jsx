import {Typography} from '@mui/material'
import React, {useEffect} from "react";
//import '../style/stylesheet.css'
//import RestaurantsList from './RestaurntsList';
import RestaurantsList from '../restaurants/RestaurntsList';
import '../../style/stylesheet.css'
import {useSelector} from 'react-redux'

function Landing () {
  const auth = useSelector(state => state.authReducer)
  const [isUserLoggedIn, setisUserLoggedIn] =React.useState(false);
  const [isAdmin, setisAdmin] = React.useState(true);
  useEffect(() => {
    if(auth.id) {
      setisUserLoggedIn(true);
      //console.log(auth)
    }
    if(auth.role==='admin'){
      setisAdmin(true)
      alert('admin mode on')
    }
  }, [auth]);
  
    return (
      <div  className="container" style={{image: '../images/rice.jpg'}} >
         <Typography variant="h6" style= {{ fontSize: '50px', marginBottom: '1rem', textAlign: 'left', color: 'floralwhite', paddingLeft: '35px', fontFamily: 'monospace' }}>
         Restaurants 
        </Typography>
        <div  >
         <RestaurantsList isUserLoggedIn={isUserLoggedIn} isAdmin={isAdmin} />      
        </div>
      
      </div>
        
    );
  
}
export default Landing;