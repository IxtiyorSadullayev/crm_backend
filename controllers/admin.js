const AdminModel = require('./../models/admin.model');
const GuruhModel = require('./../models/group.model');
const UquvchiModel = require('./../models/uquvchi.model');
exports.createAdmin = async (req,res,next) =>{
    try {
        const {name, surname, passport, phone, password, role, faoliyati} = req.body; 
        const tekshiruv = await AdminModel.findOne({passport: passport});
        if(tekshiruv){
            return await res.status(400).json({
                error: "Bu admin allaqachon yaratilgan."
            })
        }
        const newadmin = await AdminModel.create({name, surname, passport, phone, password, role, faoliyati})
        await res.status(201).json(newadmin)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}


exports.updateAdmin = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await AdminModel.findById(id);
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday admin topilmadi."
            })
        }
        await AdminModel.findByIdAndUpdate(id, req.body);
        await res.status(200).json(`Foydalanuvchi ma'lumotlari almashtirildi.\nFoydalanuvchi id raqami: ${tekshiruv._id}`);
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}


exports.removeAdmin = async (req,res,next) =>{
    try {
        const id = req.params.id
        const tekshiruv = await AdminModel.findById(id);
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday admin topilmadi."
            })
        }
        await AdminModel.findByIdAndDelete(id);
        await res.status(200).json(`Foydalanuvchi bazadan o'chirildi.\nFoydalanuvchinig id raqami: ${tekshiruv._id}`);
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.getAll = async (req,res,next) =>{
    try {
        const adminlar = await AdminModel.find();
        const sorted = adminlar.map(admin =>{
            return {
                name: admin.name,
                surname: admin.surname,
                passport: admin.passport,
                phone: admin.phone
            }
        })
        await res.status(200).json(sorted)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.getOne = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await AdminModel.findById(id)
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday admin topilmadi."
            })
        }
        if(tekshiruv.role == "O'qituvchi"){
            const guruhlar = GuruhModel.find({admin_id: tekshiruv._id});
            return await res.status(200).json({
                name: tekshiruv.name, 
                surname: tekshiruv.surname, 
                phone: tekshiruv.phone, 
                passport: tekshiruv.passport,
                role: tekshiruv.role,
                faoliyati: tekshiruv.faoliyati,
                groups: guruhlar.populate('students')
            })
        }
        await res.status(200).json(tekshiruv)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}