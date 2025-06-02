const express = require('express');
const router = express.Router();

const testUserController = require('../controllers/testController');


router.get('/', testUserController.getAllTests);

module.exports = router;