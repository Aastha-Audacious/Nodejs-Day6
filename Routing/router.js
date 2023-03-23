const router = require('express').Router();
const controller = require('../Controller/controller');
const {signup} = require('../Controller/controller');



router.post("/signup",signup);

router.route('/aastha')    //use of app.route()
.put(function (req, res) {
 res.send("put")
})
.delete(function (req, res) {
 res.send("delete")
})
.post(function (req, res) {
  res.send("post")
})
.all(function (req, res) {
  res.send("ALLL")
});

module.exports = router;