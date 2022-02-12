const mongoose = require('mongoose');
const config = require('../config.json');

module.exports = {
    init: () => {
        const dbOptions = {
            newUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4,
        };

        mongoose.connect(`mongodb+srv://haruusyren:${config.PASS}@cluster0.a4s5v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, dbOptions);
        mongoose.set('useFindAndMOdify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log("Mongoose ==> Connected to the database (./database/mongoose.js)")
        });

        mongoose.connection.on('err', (err) => {
            console.log(`Mongoose ==> Connecting to the database has failed :( ${err} (./database/mongoose.js)`)
        });
    }
}
