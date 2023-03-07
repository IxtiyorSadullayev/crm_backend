const UquvchiModel = require('./../models/uquvchi.model')


exports.createUquvchi = async(req,res,next) =>{
    try {
        const {name, surname, phone, fan_id, group_id, status, imtiyoz} = req.body;
        const tekshiruv = await UquvchiModel.find({name: name , $and: {surname: surname}})
        if(tekshiruv)
        {
            return await res.status(400).json({
                error: "Bunday o'quvchi ro'yxatda mavjud."
            })
        }
        const newuquvchi = await UquvchiModel.create({name, surname, phone, fan_id, group_id, status, imtiyoz})
        await res.status(201).json(newuquvchi)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.updateUquvchi = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await UquvchiModel.findById(id);
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday uquvchi topilmadi."
            })
        }
        await UquvchiModel.findByIdAndUpdate(id, req.body)
        await res.status(200).json(`O'quvchi ma'lumotlari yangilandi. O'quvchining id raqami: ${tekshiruv._id}`)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.removeUquvchi = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await UquvchiModel.findById(id);
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday uquvchi topilmadi."
            })
        }
        await UquvchiModel.findByIdAndUpdate(id, req.body)
        await res.status(200).json(`O'quvchi ma'lumotlari o'chirildi. O'quvchining id raqami: ${tekshiruv._id}`)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}


exports.getAllUquvchi = async (req,res,next) =>{
    try {
        const uquvchilar = UquvchiModel.find();
        await res.status(200).json(uquvchilar)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.getOneUquvchi = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await UquvchiModel.findById(id).populate("fan_id", "group_id")
        if(!tekshiruv){
            return await res.status(400).json({
                error: "O'quvchi topilmadi."
            })
        }
        await res.status(200).json(tekshiruv)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}