const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlantaSchema = Schema({
    mall: String,
    contents: [{
        letra: String,
        dato: Number
    }]
});

module.exports = mongoose.model('plantas', PlantaSchema);