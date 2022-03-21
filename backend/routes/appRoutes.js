const express = require('express');
const router = express.Router();
const {addRestaurants, getRestaurants, deleteRestaurants} = require('../controllers/auth')
const {addDishes, getDishesByRestID, deleteDishes, updateDishes} = require('../controllers/dishes')
const {addOrders, getOrders, deleteOrder} = require('../controllers/orders')


//http://localhost:8000/api/restaurants
router.post('/restaurants', addRestaurants);
router.get('/restaurants/', getRestaurants);
router.delete('/:id', deleteRestaurants);
router.put('/:id', updateRestaurant)


// http://localhost:8000/api/orders
router.post('/orders', addOrders);
router.get('/orders', getOrders);
router.delete('/:id', deleteOrder)

//http://localhost:8000/api/dishes
router.post('/dishes', addDishes);
router.get('/dishes/', getDishesByRestID)
router.delete('/dishes/:id', deleteDishes);
router.put('/:id', updateDishes)


module.exports = router;