import React from 'react';
import {CardMedia, 
        CardActions, 
        CardContent, 
        CardActionArea, 
        Typography,
        Card,Button } from '@mui/material';
        import '../../style/stylesheet.css'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteRestaurants, editRestaurants } from '../../redux/actions/restaurants';



export default function Restaurants(props) {
  const history = useHistory()
  const dispatch = useDispatch();
 // console.log(dishes)

 const handleDelete = (e) => {
   e.preventDefault()
   const id = e.target.value
   console.log(id);
   dispatch(deleteRestaurants(id))
 }

 const handleUpdate = (e) => {
  e.preventDefault()
  dispatch(editRestaurants())
  console.log('updating')
}

  const handleClick = (e) => {
    e.preventDefault();
    if(!props.isUserLoggedIn) {
    history.push('/dishes')
    } else {
      alert('please login to place order')
    }
  }

  return (
    <Card style={{maxWidth: 400, margin: '5px auto' , width: '300px'  }}>
      <CardActionArea>
        <CardMedia className="cardImage" component='div'
          style={{ height: 140  }}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.cuisineType}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.opensAt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.isAdmin ? 
        <>
         <Button variant='outlined' fullWidth onClick={handleUpdate}>
          Update
        </Button> 
        <Button variant='outlined' fullWidth onClick={handleDelete} value={props.id} >
        Delete
      </Button>
      </>:
        <Button variant='contained' fullWidth onClick={handleClick}>
          Explore
        </Button>
        }
       
      </CardActions>
    </Card>
  );
}