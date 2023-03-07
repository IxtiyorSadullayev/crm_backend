const mongoose = require('mongoose')

const connection = async () => {
    mongoose.connect(process.env.DBURL)
        .then(() => console.log('Connect db'))
        .catch(err => console.log(`Connection Error\n${err.message}`))
}
module.exports = { connection }