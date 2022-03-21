import axios from 'axios'


 export const  addRestaurants = () => {
  return (dispatch) => {
    axios.post("http://localhost:8000/api/restaurants" , {
     headers: {
         'content-type': 'application/json',
     } })
         .then((rest) => {
           
           dispatch({
             type :"ADD_REST",
             payload: rest
           })
         })

        
         .catch((error) => {
           console.log(error)
        
         })
  }

  }

  export const deleteRestaurants = (id) => {
  
    return (dispatch) => {
      axios.delete("http://localhost:8000/api/restaurants/:id" , {
       headers: {
           'content-type': 'application/json',
       } })
           .then((rest) => {
             
             dispatch({
               type :"DELETE_REST",
               payload: rest
             })
           })
  
          
           .catch((error) => {
             console.log(error)
          
           })
    }
  }

  export const UpdateRestaurants = () => {
    return (dispatch) => {
      axios.put("http://localhost:8000/api/restaurants/:id" , {
       headers: {
           'content-type': 'application/json',
       } })
           .then((rest) => {
             
             dispatch({
               type :"UPDATE_REST",
               payload: rest
             })
           })
  
          
           .catch((error) => {
             console.log(error)
          
           })
    }
 }
