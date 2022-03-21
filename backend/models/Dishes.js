const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let dishSchema = new Schema({
    restaurantId:{
      type: String,
      required: true
   },
   name: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   price: {
      type: String,
      required: true
   },
   offer: {
    type: String,
    required: true
   }
})
module.exports = mongoose.model('Dish', dishSchema);