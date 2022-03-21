import React, {useEffect} from 'react';
import {

  CardContent,
  
  Typography,
  Card, Button, CardActions
} from '@mui/material';

//import { useHistory } from 'react-router-dom';
import '../../style/stylesheet.css'
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from 'react-redux'
import { updateDishes, deleteDishes } from '../../redux/actions/dishes'



const CardContainer = styled('div')(({ theme }) => ({
  width: 700,
  margin: '8px auto',
  [theme.breakpoints.down('md')]: {
    width: 200
  },
 
}));




const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export function CartDetailes(name, id) {
  return (name, id)

}


export default function Dishes(props) {
 // const history = useHistory()
 const dispatch = useDispatch();

 const auth = useSelector(state => state.authReducer)
  const name = props.name;
  const id = props.opensAt
  const [cartItems, setCartItems] = useState({
    Itemname: name,
    ID: id,
    amount: ""
  })
 const [isAdmin, setisAdmin] = React.useState(true);

 useEffect(() => {
  if(auth.role==='admin'){
    setisAdmin(true)
    alert('admin mode on')
  }
}, [auth]);

  const handleOrder = (e) => {
    e.preventDefault();
      alert('ordering food')
    setCartItems({
      ...cartItems, amount: e.target.value
    })
    //history.push('/order')
  }

  const updateDishe = (e) => {
    e.preventDefault();
    dispatch(updateDishes())
  }
  const deleteDishe = (e) => {
    e.preventDefault();
    dispatch(deleteDishes())
  }

  return (
    <Box sx={{ width: 1 }} style={{ marginRight: '10px', marginTop: '30px' }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} >
        <Box gridColumn="span 8"  >
          <Item >
            <CardContainer  >
              <Card >
                <CardContent   style={{ backgroundColor: 'grey' }}>
                  <Typography gutterBottom variant="h5" component="h2" >
                    {props.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {props.location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" >
                    {props.opensAt}
                  </Typography>
                </CardContent>
                <CardActions>
        {isAdmin ? 
        <>
         <Button variant='outlined'  onClick={updateDishe}>
          Update
        </Button> 
        <Button variant='outlined'  onClick={deleteDishe}>
        Delete
      </Button>
      </>:
       <></>
        }
       
      </CardActions>
             </Card>
            </CardContainer>
          </Item>
        </Box>
        <Box gridColumn="span 4" >
          <Item style={{ backgroundColor: '', height: '170px', marginRight: '20px' }}>
            <Typography variant="h5" component="h2" style={{ height: '90px', textAlign: 'center' }} > Amount:
            <Typography style={{color: 'black', textAlign: 'center', marginTop: '3px', fontSize: '40px'}}> {props.cuisineType} </Typography>
             </Typography>

           
       
        <Button variant='outlined' fullWidth onClick={handleOrder} style={{ backgroundColor: 'red', margin: '10px auto' }}>
          Order
        </Button>
        
          </Item>
        </Box>
      </Box>
    </Box>
  );
}