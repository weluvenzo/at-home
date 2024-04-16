const {CompanyInfo} = require('../models')

module.exports.renderEvents = function(req, res){
    res.render('events')
}

module.exports.renderNotifications= function (req, res){
    res.render('notifications')
}

module.exports.renderCashAid = function(req, res){
    res.render('cashaid')
}

module.exports.renderFostering = function(req, res){
    res.render('fostering')
}

module.exports.renderHousing = function(req, res){
    res.render('housing')
}

module.exports.renderInHome = function(req, res){
    res.render('inhome')
}

module.exports.renderLegalAid = function(req, res){
    res.render('legalaid')
}

module.exports.renderNutrition = function(req, res){
    res.render('nutrition')
}