const router = require('express').Router();
const controller = require('../Controller/controller');
const {signup} = require('../Controller/controller');



router.post("/signup",signup);

module.exports = router;