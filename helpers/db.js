const mongoose = require('mongoose')

const connection = async () => {
    // mongoose.set('strictPopulate', true)
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.DBURL)
        .then(() => console.log('Connect db'))
        .catch(err => console.log(`Connection Error\n${err}`))
}
module.exports = { connection }