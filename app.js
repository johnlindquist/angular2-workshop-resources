var jsonServer = require('json-server')

var films = require('./films.json');
var people = require('./people.json');
var planets = require('./planets.json');
var species = require('./species.json');
var starships = require('./starships.json');
var transport = require('./transport.json');
var vehicles = require('./vehicles.json');

var db = {
    films,
    people,
    planets,
    species,
    starships,
    transport,
    vehicles
};


/**
 * Lifting the "fields" to the root of the object
 * Using the "pk" as the "id"
 */
const formattedDb = Object.keys(db).reduce((acc, current)=>{    
    acc[current] = db[current].map((item)=>{
        return Object.assign(item.fields, {id:item.pk});
    })
    
    return acc;
}, {})


var server = jsonServer.create()
server.use(jsonServer.defaults())

var router = jsonServer.router(formattedDb);
server.use(router)

server.listen(3000)