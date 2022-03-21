

export const  getOrders = () => {
    return (dispatch, getState) => {
      const rest = getState().order.orders;
      if(rest) {
        dispatch({
          type: "GET_ORDERS",
          payload: rest
        })
      } else {
          return null
      }
    }
  
  }