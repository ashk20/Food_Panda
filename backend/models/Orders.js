const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let orderSchema = new Schema({
    name:{
      type: String,
      required: true,
      type: Schema.Types.ObjectId,
       ref: 'User'
   },
   customerID: {
      type: String,
      required: true
   },
   restaurantId: {
      type: String,
      required: true,
      type: Schema.Types.ObjectId,
       ref: 'Dishes'
   },
   dish: {
      type: String,
      required: true
   },
  amountPaid: {
    type: String,
    required: true
   }
})
module.exports = mongoose.model('Order', orderSchema);