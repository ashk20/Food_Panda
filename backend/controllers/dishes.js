const Dishes = require('../models/Dishes');



exports.addDishes = async (req, res) => {
    const { restaurantId, name, description, price, offer} = req.body;
    try {
       const dish = new Dishes({
        restaurantId,
        name,
        description,
        price,
        offer
       })
        await dish.save();
        res.send('dish added')

    } catch (error) {
        res.send("error");
    }
}

exports.getDishesByRestID = async (req, res) => {
      
    try {
        const dishes = await Dishes.find()
        res.send(dishes)
    } catch (error) {
        res.send("server error");
    }
}

exports.deleteDishes = async (req, res) => {
    try {
        
       const dish = await Dishes.findOneAndRemove(req.params.body)
            res.send(dish)
    } catch (error) {
         res.send("server error")
    }
}

exports.updateDishes = async (req, res) => {
    try {
        const dish = await Dishes.updateOne(req.params.body,{$set: req.body})
      
            res.send("update dishes")
    } catch (error) {
         res.send("server error")
    }
}