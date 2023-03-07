const FanModel = require('./../models/fan.model');

exports.createFan = async (req,res,next) =>{
    try {
        const {fan_name, description} = req.body;
        const tekshiruv = await FanModel.findOne({fan_name: fan_name});
        if(tekshiruv){
            return await res.status(400).json({
                error: "Bunday fan allaqachon yaratilgan."
            })
        }
        const newfan = await FanModel.create({fan_name, description})
        await res.status(201).json(newfan)

    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.updateFan = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await FanModel.findById(id)
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday fan topilmadi."
            })
        }
        await FanModel.findByIdAndUpdate(id, req.body);
        await res.status(200).json(`Fan ma'lumotlari yangilandi.\nFanning id raqami: ${tekshiruv._id}`)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}


exports.removeFan = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await FanModel.findById(id)
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday fan topilmadi."
            })
        }
        await FanModel.findByIdAndDelete(id);
        await res.status(200).json(`Fan ma'lumotlari bazadan o'chirildi.\nFanning id raqami: ${tekshiruv._id}`)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.getAll = async (req, res, next) =>{
    try {
        const getallfans = await FanModel.find();
        await res.status(200).json(getallfans)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.getOne = async(req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await FanModel.findById(id)
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday fan topilmadi."
            })
        }
        await res.status(200).json(tekshiruv)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}