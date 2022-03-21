import React from 'react'
import {useSelector} from 'react-redux'
import Restaurants from './Restaurants'
import '../../style/stylesheet.css'


export default function RestaurantsList (props) {

    const list = useSelector( state => state.rest.restaurants)
    
   
    return (
        
        <div className="dish">
       { 
          list.map((list, index )=> {
            
              return (
                <Restaurants  key={index} id={list.id} name={list.name} location={list.location}
                 opensAt={list.opensAt} cuisineType={list.cuisineType} img={list.imgLinks}
                 isUserLoggedIn={props.isUserLoggedIn} isAdmin={props.isAdmin}/>
          ) })
       }
       </div>
      
    )
}