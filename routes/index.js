var express = require('express');
var router = express.Router();
let controller = require('../controllers/controller')
const EventController = require('../controllers/EventController')
const companyController = require('../controllers/companyController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'At Home' });
});
router.get('/events', EventController.viewAll);
router.get('/cashaid', companyController.companyViewAll);
//router.post('/cashaid', companyController.companyViewAll);
router.get('/fostering', companyController.fosteringViewAll);
router.get('/housing', companyController.housingViewAll);
router.get('/inhome', companyController.inhomeViewAll);
router.get('/legalaid', companyController.legalViewAll);
router.get('/nutrition', companyController.nutritionViewAll);
router.get('/notification', controller.renderNotification);
router.get('/edit/:id', EventController.renderEditForm);
router.post('/edit/:id', EventController.updateEvent);
router.get('/delete/:id', EventController.deleteEvent);
router.get('/add', EventController.renderAddForm);
router.post('/add', EventController.addEvent);

module.exports = router;

