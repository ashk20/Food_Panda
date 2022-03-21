
const initialState = {
 
    restaurants: [
        {
            id: "1",
            name: 'Appa Breakfast',
            location: "Meera road, Pune",
            cuisineType: 'breakfast',
            opensAt: "7 AM"
        },
        {
            id: "2",
            name: 'Swad Restaurnt',
            location: "Rajiv Nagar, Pune",
            cuisineType: 'brunch',
            opensAt: " 10 AM"
        },{
            id: "3",
            name: 'Kailas Hotel',
            location: "Near Devimata Mandir, Pune",
            cuisineType: 'meal',
            opensAt: " 10 AM"
        },{
            id: "4",
            name: 'Friends Chinese ',
            location: "Sadashiv Peth, Pune",
            cuisineType: 'chinese',
            opensAt: " 10 AM"
        },{
            id: "5",
            name: 'Cafe Creamy',
            location: "Ulhas Nagar, Pune",
            cuisineType: 'cold and hot drinks',
            opensAt: " 11 AM"
        },{
            id: "6",
            name: 'Lizza Pizza',
            location: "Near bus stand, Shivaji Nagar, Pune",
            cuisineType: 'meal',
            opensAt: " 11 AM"
        }
    ]
  }

 const restReducer = (state = initialState, action) => {
    switch(action.types) {
        
        case "ADD_REST":
        return [
            {   
                name: action.payload[0], 
                location: action.payload[1],
                cuisineType: action.payload[2],
                opensAt: action.payload[3] },
            ...state
            
        ];

        case "DELETE_REST":
            console.log('deleting')
            return [ state.restaurants.filter( restaurants => restaurants.id !== action.payload.rest.id) ]
              
        case "UPDATE_REST":

            return state.map((restaurants)=> {
                if( restaurants.name === action.payload.name ) {
                  return action.payload
                } else {
                  return restaurants;
                }
              });

        default:
            return state
    }

 }

 export default restReducer;
