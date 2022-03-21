const Restaurants = require('../models/Restaurants');


exports.addRestaurants = async (req, res) => {
    const { name, location, cuisineType, opensAt} = req.body;
    try {
       const rest = new Restaurants({
           name,
           location,
           cuisineType,
           opensAt
       })
        await rest.save();

        res.send('restaurant added')
        
    } catch (error) {
        res.status(400).send("error");
    }
}

exports.getRestaurants = async (req, res) => {
    try {
       const rest = Restaurants.find()
        res.send(rest);
        
    } catch (error) {
        res.send("server error")
    }
}

exports.deleteRestaurants = async (req, res) => {
    try {
        const rest = Restaurants.findByIdAndRemove(req.params.body)
        rest.send(rest)
        
    } catch (error) {
        res.send("server error")
    }
}

exports.updateRestaurants = async (req, res) => {
    try {
        const rest = Restaurants.updateOne(req.params.body, {$set: req.body})
        res.send(rest)
        
    } catch (error) {
        res.send("server error")
    }
}

