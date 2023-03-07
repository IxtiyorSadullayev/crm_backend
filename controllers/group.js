const GroupModel = require('./../models/group.model')

exports.createGroup = async (req,res,next ) =>{
    try {
        const {group_name, oy_raqami, fan_id, admin_id} = req.body;
        const tekshiruv = await GroupModel.findOne({group_name: group_name})
        if(tekshiruv){
            return await res.status(400).json({
                error: "Bunday guruh mavjud. Bunday nom bilan guruh yaratilgan."
            })
        }

        const newGroup = await GroupModel.create({group_name, oy_raqami, fan_id, admin_id})
        await res.status(201).json(newGroup)
    } catch (error) {
        await res.status(500).json({
            error: error.message
        })
    }
}

exports.updateGroup = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await GroupModel.findById(id)
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday guruh topilmadi."
            })
        }
        await GroupModel.findByIdAndUpdate(id, req.body);
        await res.status(200).json(`Guruh ma'lumotlari yangilandi.\nGuruhning id raqami: ${tekshiruv._id}`);
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}


exports.removeGroup = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await GroupModel.findById(id)
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday guruh topilmadi."
            })
        }
        await GroupModel.findByIdAndUpdate(id, req.body);
        await res.status(200).json(`Guruh ma'lumotlari o'chirildi.\nGuruhning id raqami: ${tekshiruv._id}`);
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.getAllGroups = async (req,res,next) =>{
    try {
        const groups = await GroupModel.find();
        await res.status(groups)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}

exports.getOneGroup = async (req, res, next) =>{
    try {
        const id = req.params.id;
        const tekshiruv = await GroupModel.findById(id);
        if(!tekshiruv){
            return await res.status(400).json({
                error: "Bunday guruh topilmad."
            })
        }
        const toliq = tekshiruv.populate('fan_id admin_id students')
        await res.status(200).json(toliq)
    } catch (e) {
        await res.status(500).json({
            error: e.message
        })
    }
}