const mongoose = require('mongoose')
const AdminModel = new mongoose.Schema({
    name: {type: String, required: [true, "Adminstratsiya foydalanuvchisining ismini kiritish zarur"],},
    surname: {type: String, required:[true, "Familiyasi kiritilishi zarur."]},
    passport: {type: String, required: [true, "Foydalanuvchining passport ma'lumotini kiritishingiz zarur"]},
    phone: {type: String, required: [true, "Foydalanuvchinig telefon raqamini kiritishingiz zarur"]},
    password: {type: String, required: [true, "Foydalanuvchining parolini kiritishingiz zarur"]},
    role: {type: String, enum: ["Admin", "O'qituvchi", "Direktor"], required: true, default: "O'qituvchi"},
    faoliyati: {type: Boolean, required: true, default: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('AdminModel', AdminModel)