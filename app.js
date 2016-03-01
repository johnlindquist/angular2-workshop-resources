const jsonServer = require('json-server')

const films = require('./films.json');
const people = require('./people.json');
const planets = require('./planets.json');
const species = require('./species.json');
const starships = require('./starships.json');
const transport = require('./transport.json');
const vehicles = require('./vehicles.json');

const db = {
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


const server = jsonServer.create()
server.use(jsonServer.defaults())

const router = jsonServer.router(formattedDb);
server.use(router)

server.listen(3000)