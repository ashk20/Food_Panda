//import jwtDecode from "jwt-decode";

const initialState = {
 
  user:
  {
  name: null,
  email: null,
  id: null,
  role: null
  },
  error: {

  }
}

const authReducer = (state = initialState, action) => {
  
  switch(action.type) {
    case "SIGN_UP":
    case "LOG_IN":
    return {
      ...state,
      name: action.payload.user.name,
      email: action.payload.user.email,
      id: action.payload.user.id,
      role: action.payload.user.role 
    }

    case "USER_LOADED": 
         return {
           ...state,
           name: action.payload.name,
           email: action.payload.email,
           id: action.payload.id,
           role: action.payload.role 
         }
    
    case "LOG_OUT":
     localStorage.removeItem("token")
     return {
      name: null,
      email: null,
      _id: null
     }

     case "USER_ERROR": 
     return {
       ...state,
       error: action.payload
     }

    default:
      return state;
  }
} 

export default authReducer;