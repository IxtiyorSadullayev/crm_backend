const TulovModel = require('./../models/tulov.model');

exports.createTulov = async (req,res,next) =>{
    try {
        const {uquvchi_id, oy, oy_raqami, group_id} = req.body;
        const tekshiruv = await TulovModel.findOne({uquvchi_id, $and: {oy_raqami: oy_raqami}})
        if(tekshiruv){
            return await res.status(400).json({
                error: "O'quvchi bu oy uchun pul mablag'ini to'lagan."
            })
        }
        const tolov = await TulovModel.create({uquvchi_id, oy, oy_raqami, group_id})
        await res.status(201).json(tolov)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.getAllTulov = async (req,res,next) =>{
    try {
        const tulovlar = await TulovModel.find()
        await res.status(200).json(tulovlar)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}