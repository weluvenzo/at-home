const{CompanyInfo} = require('../models');
const zipcodes= ['93706', '93710', '93725', '93722', '93705', '93721', '93727', '93701', '93712', '93726', '93711', '93704', '93703', '93612'];
const category=['Legal Aid','In home','Housing', 'Fostering', 'Nutrition', 'Cash Aid']
module.exports.companyViewAll = async function(req, res) {
    let searchZipcodes = ['All'];
    for (let i = 0; i < zipcodes.length; i++) {
        searchZipcodes.push(zipcodes[i]);
    }
    let companyInfoObj;
    let searchZipcode = req.query.zipcode || 'All';
    let searchRandom = req.query.random || false; //changed
    if (searchZipcode === 'All') {
        companyInfoObj = await CompanyInfo.findAll();
    } else {
        companyInfoObj = await CompanyInfo.findAll({
            where: {
                zipcodes: searchZipcode
            }
        });
    }
    if(companyInfoObj.length > 0 && searchRandom){
        let randomIndex = getRandomInt(companyInfoObj.length);
        companyInfoObj = [companyInfo[randomIndex]];
    }
    res.render('cashaid', {companyInfoObj: companyInfoObj, zipcodes:searchZipcodes, searchZipcode, searchRandom}); //changed
}

module.exports.legalViewAll = async function(req, res) {
    let companyInfoObj = await CompanyInfo.findAll();
    res.render('legalaid', {companyInfoObj}); //changed
}
module.exports.inhomeViewAll = async function(req, res) {
    let companyInfoObj = await CompanyInfo.findAll();;
    res.render('inhome', {companyInfoObj}); //changed
}
module.exports.housingViewAll = async function(req, res) {
    let companyInfoObj = await CompanyInfo.findAll();;
    res.render('housing', {companyInfoObj}); //changed
}
module.exports.fosteringViewAll = async function(req, res) {
    let companyInfoObj = await CompanyInfo.findAll();;
    res.render('fostering', {companyInfoObj}); //changed
}
module.exports.nutritionViewAll = async function(req, res) {
    let companyInfoObj = await CompanyInfo.findAll();;
    res.render('nutrition', {companyInfoObj}); //changed
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}