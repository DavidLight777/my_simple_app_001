const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Пути для пользователей
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUser);
router.patch('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
