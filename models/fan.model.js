const mongoose = require('mongoose')
const FanModel = new mongoose.Schema({
    fan_name: { type: String, required: true, unique: false },
    description: { type: String, required: true, default: "Asosiy fan." },
    faoliyati:{type: Boolean, required: true, default: true}
}, {
    timestamps: true
})

module.exports = mongoose.model("FanModel", FanModel)