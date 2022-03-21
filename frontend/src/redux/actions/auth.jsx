
import axios from "axios";
  
  export const signup = (user) =>  {
      return (dispatch) => {
          axios
          .post('http://localhost:8000/api/signup', user, {
            headers: {
                'content-type': 'application/json',
            } } )
          .then(token => {
              localStorage.setItem("token", token.data)

              dispatch({
                  type: "SIGN_UP",
                  token: token.data
              })
          })
          .catch(error => {
              console.log(error.res)
          })
      }
   
  };

  export const loadUser = (creds) => {
    //const { email } = creds
    return (dispatch) => {
      axios.get("http://localhost:8000/api/", creds, {
        headers: {
          'content-type': 'application/json',
        }
      })
      .then((res) => {
        localStorage.setItem("auth", res.data.token);
        console.log(res.data);
        dispatch({
          type: "USER_LOADED",
          payload: res.data
        })
      }).catch((error) =>{
        console.log(error);
      })
     // const user = getState().authReducer.user   
  }
}
  
 export const loginUser = (creds) =>  {
   return (dispatch) => {
     axios.post("http://localhost:8000/api/login" ,creds, {
      headers: {
          'content-type': 'application/json',
      } })
          .then((user) => {
            localStorage.setItem("user", user.data.token);
            console.log(user.data)
            dispatch({
              type :"LOG_IN",
              payload: user.data
            })
          })

         
          .catch((error) => {
            //console.log(error.response)
            dispatch({
              type: "USER_ERROR",
              payload: error.response.data
            })
           // alert(error.response.data)
          })
   }
   
  }
  
  export const logout = () =>  {

    return (dispatch) => {
      dispatch({
        type: "LOG_OUT"
      })
    }
  }