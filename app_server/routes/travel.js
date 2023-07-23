<<<<<<< HEAD
const express  = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* GET home page. */
router.get('/', controller.travel);

=======
const express  = require('express');
const router = express.Router();
const controller = require('../controllers/travel');

/* GET home page. */
router.get('/', controller.travel);

>>>>>>> b8de6c48503649512e4c3005778c5ad46e731910
module.exports = router;