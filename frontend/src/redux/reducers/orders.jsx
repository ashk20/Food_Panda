
const initialState = {
    orders: [
        {
            id: 1,
            name: 'Appa Breakfast',
            location: "Meera road, Pune",
            cuisineType: 'breakfast',
            opensAt: "7 AM"
        },
      
    ]
  }

  

 const orderReducer = (state = initialState, action) => {

    switch(action.types) {
        
        case "ADD_ORDERS":
        case "GET_ORDERS":
        return {
            ...state,
            dishes: action.payload
        }

        default:
            return state
    }

 }

 export default orderReducer;