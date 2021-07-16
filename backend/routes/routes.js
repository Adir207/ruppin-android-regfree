const express = require('express');

const controllers = require('../controllers/controllers');

const router = express.Router();

router.get('/subscriber', controllers.getSubscriber);

router.get('/call', controllers.getCallToken);

module.exports = router;
