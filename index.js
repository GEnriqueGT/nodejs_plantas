const mongoose = require('mongoose');
const app = require('./app');
const plantaController = require('./src/controllers/planta.controller');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Plantas', { useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    console.log("Se encuentra conectado a la base de datos");
    app.listen(3000, function() {
        console.log("hola mundo, estoy en el puerto 3000!")
    })
}).catch(error => console.log(error))


plantaController.PlantasIniciales()