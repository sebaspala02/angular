let express = require('express');
let PlaceController = require('../controllers/PlaceController');

let router = express.Router();

router.get('/places', PlaceController.show);

router.post('/places', PlaceController.store);

router.get('/places/:id', PlaceController.find);

router.get('/places/:id', PlaceController.destroy);

router.get('places/:id', PlaceController.update);

module.exports = router;

let UserController = require('../controllers/UserController');
router.post('/user', UserController.store);

router.get('/user/:id', UserController.find);
