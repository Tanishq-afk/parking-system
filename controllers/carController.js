// controllers/carController.js

const Car = require('../models/Car');

// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a car by ID
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new car entry
exports.createCar = async (req, res) => {
    const { licensePlate, slotNumber, entryTime, exitTime } = req.body;

    try {
        const newCar = new Car({
            licensePlate,
            slotNumber,
            entryTime,
            exitTime
        });
        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a car by ID
exports.updateCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a car by ID
exports.deleteCar = async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};