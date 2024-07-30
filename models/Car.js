// models/Car.js

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    licensePlate: { type: String, required: true },
    slotNumber: { type: String, required: true },
    entryTime: { type: Date, default: Date.now },
    exitTime: { type: Date, default: null }
});

module.exports = mongoose.model('Car', carSchema);