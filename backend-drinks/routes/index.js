const router = require('express').Router();
const { register } = require('../controllers/authController');


/* GET home page. */
router
    .get('/', function(req, res, next) {
  res.status(200).json({
    ok: true,
    message : "done!"
  });
})
    .post('/api/register', register)

module.exports = router;
