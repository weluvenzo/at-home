var express = require('express');
let controller = require('../controllers/controller')
var router = express.Router();
const EventController = require('../controllers/EventController')
const companyController = require('../controllers/companyController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'At Home' });
});
router.get('/events', EventController.viewAll);
router.get('/cashaid', companyController.companyViewAll);
//router.post('/cashaid', companyController.companyViewAll);
//router.get('/fostering', controller.renderFoster);
router.get('/housing', controller.renderHousing);
router.get('/inhome', controller.renderInHome);
router.get('/legalaid', companyController.legalViewAll);
router.get('/nutrition', controller.renderNutrition);
//router.get('/notifications', controller.renderNotification);
router.get('/edit/:id', EventController.renderEditForm);
router.post('/edit/:id', EventController.updateEvent);
router.get('/delete/:id', EventController.deleteEvent);
router.get('/add', EventController.renderAddForm);
router.post('/add', EventController.addEvent);

module.exports = router;

/*


 */