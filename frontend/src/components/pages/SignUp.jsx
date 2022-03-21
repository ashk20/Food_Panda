import React,{useState} from "react";
import {useDispatch, } from 'react-redux'
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Grid from '@mui/material/Grid';
import {signup} from '../../redux/actions/auth'
import { Avatar, Button, Link, Paper, TextField, Typography } from "@mui/material";
import {validateSignupForm} from './validation'


const SignUp = (props) => {
 
  const history = useHistory();
  const dispatch = useDispatch();
  
 const [user, setUser] = useState({
   name: "",
   email: "",
   role: "user",
   password: ""

 });

 const handleSubmit = (e) => {
   e.preventDefault()
   if(validateSignupForm(user)) {
   dispatch(signup(user))
   setUser({
    name: "",
    email: "",
    role: 'user',
    password: ""
    
   });
   history.push("/")
  } 
  }

 

  const PaperStyle = { padding:20, height:'80vh', width: 400, margin: "10px auto"}
  const AvtarStyle = {backgroundColor: "green"}
  const ButtonStyle = {margin: "5px 0"}
  return (
    <div style={{height: '630px'}}>
    <Grid style={{height: '930px', maxHeight: '520px' }}>
      <Paper  elevation={10} style={PaperStyle}>
        <Grid align='center'>
        <Avatar style={AvtarStyle}><LockOutlinedIcon/></Avatar>
        <h2>SignUp</h2>
        </Grid>
        <TextField label="username" placeholder="Enter user name" fullWidth required 
        value={user.name} onChange = {(e) => setUser({...user, name: e.target.value})}/>
        <TextField label="email" placeholder="Enter email address" style={{margin: '5px 0' }}type="email" fullWidth required
        value={user.email} onChange = {(e) => setUser({...user, email: e.target.value})}/>
        <TextField label="password" placeholder="Enter Password" style={{margin: '5px 0' }}type="password" fullWidth required
        value={user.password} onChange = {(e) => setUser({...user, password: e.target.value})}/>
        
        
        
    
            <Button type="submit" color="primary" variant="contained" fullWidth style={ButtonStyle}
            onClick = {handleSubmit}> SignUp</Button>
          
            <Typography> Do you have an account ?
              <Link href="/login" >
                LogIn
              </Link>
            </Typography>
      </Paper>
    
    </Grid>
    </div>
  )

}

export default SignUp;