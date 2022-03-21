const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let restaurantSchema = new Schema({
   name:{
      type: String,
      required: true
   },
   location: {
      type: String,
      required: true
   },
   cuisineType: {
      type: String,
      required: true
   },
   opensAt: {
      type: String,
      required: true
   }
})
module.exports = mongoose.model('Restaurants', restaurantSchema);