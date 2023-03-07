const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connection } = require('./helpers/db')

// config
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
dotenv.config()
// connect db
connection()
// route lar
app.get('/', (req, res) => {
    res.send('Assalom. Crm ga xush kelibsiz.')
})

// api lar ro'yxati 

app.use('/api/admin/', require('./routes/admin'))
app.use('/api/fan/', require('./routes/fan'))
app.use('/api/group/', require('./routes/group'))
app.use('/api/uquvchi/', require('./routes/uquvchi'))
app.use('/api/tulov/', require('./routes/tulov'))


// error handler
app.use(async (req, res, next) => {
    try {
        const error = new Error("Bazaga bog'lanishda hatolik mavjud.")
        error.status = 500;
        next(error);
    } catch (error) {
        await res.status(500).json(error.message)
    }
})


app.use(async (error, req, res, next) => {
    try {
        await res.status(error.status).json(error.message)
    } catch (error) {
        await res.status(500).json(error.message)
    }
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server start on port ${port}`))