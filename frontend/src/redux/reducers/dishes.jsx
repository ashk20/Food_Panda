
const initialState = {
    dishes: [
        {
            id: 1,
            restaurantId: "1",
            name: 'Idali wada',
            description: " two Idali, sambr, one medu wada, chutney ",
            price: "80",
            offer: "20% discount on order of three"
        },
        {
            id: 1,
            restaurantId: "1",
            name: 'Poha',
            description: " one full plate poha, sambr,  chutney ",
            price: "20",
            offer: "No offer"
        },{
            id: 1,
            restaurantId: "1",
            name: 'Sandwitch',
            description: " two grilled sandwitch, sauss, cheese ",
            price: "80",
            offer: "20% discount on order of three"
        },{
            id: 2,
            restaurantId: "2",
            name: 'Icream',
            description: " two Idali, sambr, one medu wada, chutney ",
            price: "80",
            offer: "20% discount on order of three"
        },{
            id: 2,
            restaurantId: "2",
            name: 'Cold Coffee',
            description: " two Idali, sambr, one medu wada, chutney ",
            price: "80",
            offer: "20% discount on order of three"
        },{
            id: 2,
            restaurantId: "2",
            name: 'Tea',
            description: " two Idali, sambr, one medu wada, chutney ",
            price: "80",
            offer: "20% discount on order of three"
        }
    ]
  }

  

 const dishReducer = (state = initialState, action) => {
    
    switch(action.types) {
        
        case "ADD_DISHES":
                return [
                    {   
                        name: action.payload[0], 
                        description: action.payload[1],
                        price: action.payload[2],
                        offer: action.payload[3] },
                    ...state
                    
                ];
        case "GET_DISHES":
            return {
               state: action.payload
            }
        case "DELETE_DISHES": 
        return [ state.dishes.filter( dishes => dishes.id !== action.payload.dishes.id) ]
        case "UPDATE_DISHES":
            return state.map((dishes)=> {
                if( dishes.name === action.payload.name ) {
                  return action.payload
                } else {
                  return dishes;
                }
              });

        default:
            return state
    }

 }

 export default dishReducer;