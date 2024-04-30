const {CompanyInfo} = require('../models')

module.exports.renderHome = function(req, res){
    res.render('home');
}
module.exports.renderNotification = function(req, res){
    res.render('notification');
}
module.exports.renderNutrition = function(req, res){
    res.render('nutrition');
}
module.exports.renderHousing = function(req, res){
    res.render('housing');
}
module.exports.renderInHome = function(req, res){
    res.render('inhome');
}
module.exports.renderFoster = function(req, res){
    res.render('fostering');
}
module.exports.renderLegalAid = function(req, res){
    res.render('legalaid');
}
module.exports.renderEvents = function(req, res){
    res.render('events');
}



