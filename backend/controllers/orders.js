const { NativeError } = require('mongoose');
const Orders = require('../models/Orders');



exports.addOrders = async (req, res) => {
    const { customerID,  dish, amountPaid } = req.body;
    try {
       const order = new Orders({
        customerID,
        dish,
        amountPaid,
       })
        await order.save();

        res.send('order added')
        
    } catch (error) {
        res.send(error);
    }
}

exports.getOrders = async (req, res) => {
      
    try {
        const dishes = await Orders.find(req.params.body)
        res.send(dishes)
    } catch (error) {
        res.send(error);
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        
       const dish = await Orders.findOneAndRemove(req.params.body)
            res.send("deleted")
    } catch (error) {
         res.send("server error")
    }
}