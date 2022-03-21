import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch,  } from "react-redux";
import { logout } from "../../redux/actions/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Button,
  } from "@mui/material";

//import DrawerComponent from "./Drawer";
//import '../style/stylesheet.css'
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import '../../style/stylesheet.css'
import DrawerComponent from "./Drawer";








function Navbar(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const history = useHistory();
  const dispatch = useDispatch(); 

  const auth = useSelector(state => state.authReducer);

  const [isUserLoggedIn, setisUserLoggedIn] =React.useState(false);
 
  //console.log(auth)
  
  
  useEffect(() => {
    if(auth.id) {
      setisUserLoggedIn(true);
      //console.log(auth)
      alert("successfully logged in")
    }
  }, [auth]);
  
 
  /*if (searchItem.length > 0) {
      Restaurants.filter((country) => {
      return country.name.match(searchItem);
  }); 
  }*/
  
  const handleLogOut = () => {
    dispatch(logout())
    setisUserLoggedIn(false)
    alert("user logged out")
    history.push('/')
  }

  const handleLogin = () => {
    history.push("/login")
  }

  const handleSignup = () => {
    history.push("/signup")
  }

  return (
    <div className='navbar' >
    <AppBar position='sticky' style={{ background: 'transparent', boxShadow: 'none'}} >
      <CssBaseline />
      <Toolbar>
        <Typography variant="h6" style= {{flexGrow: "1",cursor: "pointer", textAlign: 'left', color: 'yellow', fontSize: '50px', fontFamily: 'cursive'}} >
         Food Adda
        </Typography>
        
          <div className="links" >
          { !isMobile ? (
            <>
          <div style={{ marginLeft: '10px', display: "flex" }}>
            <Button >
            <Link to="/" style={{ textDecoration: "none", color: 'black', fontSize: "20px",marginLeft: '20px',"&:hover": {color: "yellow",borderBottom: "1px solid white"} }}>
              Home
            </Link>
            </Button>
            { isUserLoggedIn ? (
              <>
              <Button>
              <Link to="/" style={{ textDecoration: "none", color: 'black', fontSize: "20px",marginLeft: '20px',"&:hover": {color: "yellow",borderBottom: "1px solid white"} }}>
              Order
            </Link>
            </Button>
              <Button style={{ textDecoration: "none", color: 'black', fontSize: "20px",marginLeft: '20px',"&:hover": {color: "yellow",borderBottom: "1px solid white"} }}>
                Hey, {auth.name}
              </Button>
              <Button onClick={handleLogOut} style={{ textDecoration: "none", color: 'black', fontSize: "20px",marginLeft: '20px',"&:hover": {color: "yellow",borderBottom: "1px solid white"} }}>
                 logout 
              </Button>
              </>
            ) : (
              <>
              <Button onClick={handleLogin} style={{ textDecoration: "none", color: 'black', fontSize: "20px",marginLeft: '20px',"&:hover": {color: "yellow",borderBottom: "1px solid white"} }}>
               Login
             </Button>
             <Button onClick={handleSignup} style={{ textDecoration: "none", color: 'black', fontSize: "20px",marginLeft: '20px',"&:hover": {color: "yellow",borderBottom: "1px solid white"} }}>
                Signup
             </Button>
             </>
            ) } 
            </div> 
            </> 
            ): (
              <>
              <DrawerComponent loadingUser={isUserLoggedIn}/>
              </>
            )}
            </div>
      </Toolbar>
    </AppBar>
    </div>
  );
}
export default Navbar;

