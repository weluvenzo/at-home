var express = require('express');
let controller = require('../controllers/controller')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'At Home' });
});
router.get('/notifications', controller.renderNotifications);
router.get('/events', controller.renderEvents);
router.get('/cashaid', controller.renderCashAid);
router.get('/fostering', controller.renderFostering);
router.get('/housing', controller.renderHousing);
router.get('/inhome', controller.renderInHome);
router.get('/legalaid', controller.renderLegalAid);
router.get('/nutrition', controller.renderNutrition);

module.exports = router;
