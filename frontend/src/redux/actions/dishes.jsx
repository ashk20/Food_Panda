
import axios from 'axios'

export const  getDishes = () => {
  return (dispatch) => {
    axios.get("http://localhost:8000/api/dishes" ,  {
     headers: {
         'content-type': 'application/json',
     } })
         .then((dishes) => {
           
           dispatch({
             type :"ADD_DISHES",
             payload: dishes
           })
         })

         .catch((error) => {
           console.log(error)
        
         })
  }

}

export const addDishes = () => {
  return (dispatch, add) => {
    axios.post("http://localhost:8000/api/dishes" , add, {
     headers: {
         'content-type': 'application/json',
     } })
         .then((dishes) => {
           
           dispatch({
             type :"ADD_DISHES",
             payload: dishes
           })
         })

        
         .catch((error) => {
           console.log(error)
        
         })
  }
}

export const deleteDishes = () => {
  return (dispatch) => {
    axios.delete("http://localhost:8000/api/dishes" , {
     headers: {
         'content-type': 'application/json',
     } })
         .then((dish) => {
           
           dispatch({
             type :"DELETE_DISH",
             payload: dish
           })
         })

        
         .catch((error) => {
          
          console.log(error)
          
         })
  }
}

export const updateDishes = () => {
  return (dispatch) => {
    axios.put("http://localhost:8000/api/dishes" , {
     headers: {
         'content-type': 'application/json',
     } })
         .then((dish) => {
           dispatch({
             type :"UPDATE_DISH",
             payload: dish
           })
         })

        
         .catch((error) => {
           
          console.log(error)
    
         })
  }
}