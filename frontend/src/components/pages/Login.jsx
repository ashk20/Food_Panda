import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
//import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
//import '../style/stylesheet.css'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Link, Paper, TextField, 
Typography } from "@mui/material";
import { loginUser } from '../../redux/actions/auth'
import '../../style/stylesheet.css'
import {validateLoginForm} from './validation'
import bcrypt from 'bcryptjs'



const PaperStyle = { padding:10,  width: 300, margin: "20px auto" }
const AvtarStyle = {backgroundColor: "green"}
const ButtonStyle = {margin: "8px 0"}


export default function Login (props) { 

  //const salt = bcrypt.genSaltSync(10)
  const history = useHistory();
  const [creds, setCreds] = useState({
    email: "",
    password: ""
  });
   
 const dispatch = useDispatch();
 const error = useSelector(state => state.authReducer.error)
 //console.log(error);


 useEffect(() => {
   return () => {
   
   };
 }, [error])

 
  const handleLogin = (e) => {
    e.preventDefault();
    const hashedPassword = bcrypt.hashSync(creds.password, '$2a$10$CwTycUXWue0Thq9StjUM0u')
   setCreds({...creds, password: hashedPassword})
    if(validateLoginForm(creds)){
   dispatch(loginUser(creds))
   //dispatch(loadUser(creds));
    history.push('/')
    setCreds({
      email: "",
      password: ""
    })
  }

  }

  return (
    <div  style={{height: '930px'}}>
    <Grid >
    
      <Paper   elevation={10} style={PaperStyle}>
        <div className="login" >
        <Grid align='center'>
        <Avatar style={AvtarStyle}><LockOutlinedIcon/></Avatar>
        <h2>LogIn</h2>
        </Grid>
        <TextField label="email" placeholder="Enter email" fullWidth required 
        value={creds.email}
        onChange={(e) => setCreds({...creds, email: e.target.value})}/>
        <TextField label="password" placeholder="Enter Password" style={{margin: '8px 0' }}
        type="password" fullWidth required  
        value={creds.password}
        onChange={(e) => setCreds({...creds, password: e.target.value})} />
        
            <Button type="submit" color="primary" variant="contained" fullWidth style={ButtonStyle}
            onClick={handleLogin}> LogIn</Button>
            
            <Typography>
              <Link href="#" >
                forgot password ?
              </Link>
            </Typography>
            <Typography> Do you have an account ?
              <Link href="/signup" >
                Sign Up
              </Link>
            </Typography>
            </div>
      </Paper>
    
    </Grid>
    </div>
  )

}

