const mongoose = require('mongoose')
const TulovModel = new mongoose.Schema({
    uquvchi_id: {type: mongoose.Schema.Types.ObjectId, required: [true, "O'quvchining idsini kiritishingiz zarur"], ref: "UquvchiModel"},
    oy: {type: String, required: true},
    oy_raqami: {type: Number, required: true}
}, {
    timestamps: true
})

module.exports = mongoose.model("TulovModel", TulovModel)