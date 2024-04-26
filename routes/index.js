var express = require('express');
let controller = require('../controllers/controller')
var router = express.Router();
const EventController = require('../controllers/EventController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'At Home' });
});
router.get('/events', EventController.viewAll);
router.get('/cashaid', controller.renderCashAid);
router.get('/fostering', controller.renderFostering);
router.get('/housing', controller.renderHousing);
router.get('/inhome', controller.renderInHome);
router.get('/legalaid', controller.renderLegalAid);
router.get('/nutrition', controller.renderNutrition);
router.get('/notifications', controller.renderNotifications);
router.get('/edit/:id', EventController.renderEditForm);
router.post('/edit/:id', EventController.updateEvent);
router.get('/delete/:id', EventController.deleteEvent);
router.get('/add', EventController.renderAddForm);
router.post('/add', EventController.addEvent);

module.exports = router;

/*


 */