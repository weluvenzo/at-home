const{Event} = require('../models');
const zipcodes= ['93706', '93710', '93725', '93722', '93705', '93721', '93727', '93701', '93712', '93726', '93711', '93704', '93703', '93612'];

module.exports.viewAll = async function(req, res) {
    let searchZipcodes = ['All'];
    for (let i = 0; i < zipcodes.length; i++) {
        searchZipcodes.push(zipcodes[i]);
    }
    let events;
    let searchZipcode = req.query.zipcode || 'All';
    let searchRandom = req.query.random || false; //changed
    if (searchZipcode === 'All') {
        events = await Event.findAll();
    } else {
        events = await Event.findAll({
            where: {
                zipcodes: searchZipcode
            }
        });
    }
    if(events.length > 0 && searchRandom){
        let randomIndex = getRandomInt(events.length);
        events = [events[randomIndex]];
    }
    res.render('events', {events: events, zipcodes:searchZipcodes, searchZipcode, searchRandom}); //changed
}

module.exports.renderEditForm = async function (req, res) {
    const event = await Event.findByPk(req.params.id);
    res.render('edit', {event, zipcodes});
}

module.exports.updateEvent = async function (req,res) {
    await Event.update(
        {
            name: req.body.name,
            location: req.body.location,
            date: req.body.date,
            description: req.body.description,
            zipcode: req.body.zipcode
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/events');
}

module.exports.deleteEvent = async function (req, res) {
    await Event.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/events');
}

module.exports.renderAddForm = function (req, res) {
    const event = {
        name: "",
        Location: "",
        Date: "",
        Description: "",
        zipcodes: zipcodes[0],
    };
    res.render('add', {event, zipcodes});
}

module.exports.addEvent = async function (req, res) {
    await Event.create(
        {
            name: req.body.name,
            location: req.body.location,
            date: req.body.date,
            description: req.body.description,
            zipcode:req.body.zipcode
        });
    res.redirect('/events')
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}