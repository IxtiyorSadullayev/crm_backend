const mongoose = require('mongoose')
const GroupModel = new mongoose.Schema({
    group_name: { type: String, required: [true, "Guruhning nomini kiritishingiz zarur"] },
    oy_raqami: { type: Number, required: [true, "O'quvchi necha oy o'qishini kiritishingiz zarur."] },
    fan_id: { type: mongoose.Schema.Types.ObjectId, autopopulate: true, required: [true, "Fanning id raqamini kiritishingiz zarur"] },
    admin_id: { type: mongoose.Schema.Types.ObjectId, required: [true, "Guruhga masul ishchining id sini kiritishingiz zarur"] },
    students: { type: mongoose.Schema.Types.Array, ref: "UquvchiModel" },
    faoliyati:{type: Boolean, required: true, default: true}
}, {
    timestamps: true
})

module.exports = mongoose.model("GroupModel", GroupModel)