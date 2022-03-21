import React from 'react'
import { useSelector } from 'react-redux'
//import '../style/stylesheet.css'
import Dishes from './Dishes'
import { Typography } from '@mui/material'
import '../../style/stylesheet.css'


export default function DishList(props) {

  const dishes = useSelector(state => state.dish.dishes)
  
  return (

    <div className="order">
      <Typography variant="h6" style={{ fontSize: '50px', marginBottom: '1rem', textAlign: 'left', color: 'floralwhite', paddingLeft: '35px', fontFamily: 'monospace' }}>
        Order now
      </Typography>
              {
                
                dishes.filter(dishes => dishes.restaurantId === "2").map((dishes, index) => {
                  return (
                    <Dishes key={index} name={dishes.name} location={dishes.description}
                      cuisineType={dishes.price} opensAt={dishes.offer} />
                  )
                })
              } 
    </div>


  )
}