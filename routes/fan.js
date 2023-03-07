const { createFan, updateFan, removeFan, getAll, getOne } = require('../controllers/fan')

const router = require('express').Router()


//  api/fan/add

router.post('/add', createFan)

// api/fan/update/:id

router.put('/update/:id', updateFan)

// api/fan/remove/:id

router.delete('/remove/:id', removeFan)


// api/fan

router.get('/', getAll)

// api/fan/:id

router.get('/:id', getOne)


module.exports = router;