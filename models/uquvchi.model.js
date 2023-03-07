const mongoose = require('mongoose')
const UquvchiModel = new mongoose.Schema({
    name: {type: String, required:[true, "O'quvchining ismini kiritishingiz zarur."]},
    surname: {type: String, required:[true, "O'quvchining familiyasini kiritishingiz zarur"]},
    phone: {type: String, required: [true, "O'quvchining telefon raqamini kiritishingiz zarur"]},
    fan_id: {type: mongoose.Schema.Types.ObjectId, required: [true, "Fan id ni kiritishingiz zarur"], ref: "FanModel"},
    tulov: {type: mongoose.Schema.Types.Array, ref: "TulovModel"},
    group_id: {type: mongoose.Schema.Types.ObjectId, required: [true, "O'quvchining guruhini kiritishingiz zarur."], ref: "GroupModel"},
    status: {type: String, required: [true, "O'quvchining statusini kiritishingiz zarur"], enum: ["O'qimoqda", "Ketgan", "Bitirgan"], default: "O'qimoqda"},
    imtiyoz: {type: Boolean, required: true, default: false}
}, {
    timestamps: true
})

module.exports = mongoose.model("UquvchiModel", UquvchiModel)