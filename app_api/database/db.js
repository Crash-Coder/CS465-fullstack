const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURI =  `mongodb://127.0.0.1:27017/travlr`;
const readLine = require('readline');

//avoid 'current Server Discovert and Monitoring engine is depreciated'
//mongoose.set("useUnifiedTopology", true);
mongoose.set('strictQuery', false);

const connect = () => {
    setTimeout(
      () =>
        mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        }),
      1000
    );
};

//Monitoring successful connection
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});
//checking for a connection error
mongoose.connection.on('error', err => {
    console.log(`Mongoose connction error: ${err}`);
});
// checking for a disconnection event
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

if (process.platform == 'win32'){
    const r1 = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout,
    });
    r1.on ('SIGINT', () => {
        process.emit ("SIGINT");
    });
}

//Defining the function taking in a message and a callback
const gracefulShutdown = (msg, callback) => {
    // closing the mongoose connection and passing theough an anonmyous function 
    mongoose.connection.close(() => {
        //output message and call a callback when the mongoose connection is closed
        console.log(`Mongoose disconnected through: ${msg}`);
        callback();
    });
};

// calls the function when the application terminates or when the nodemon restarts

// Listens for SIGUSR2 = nodemon
process.once('SIGUSR2', () => {
    // sends a message to graceful-shutdown and call back to kill pricess
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// Listens for SIGINT
process.on('SIGINT', () => {
    // sends a message to graceful-shutdown and callback to exit Node process
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
// Listens for SIGTERM to be emitted when Heroku shuts down
process.on('SIGTERM', () => {
    // sends a message to graceful-shutdown and callback to exit the node process
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

connect();

require('./models/travlr');
