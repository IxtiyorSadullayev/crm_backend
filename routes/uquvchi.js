const { createUquvchi, updateUquvchi, removeUquvchi, getAllUquvchi, getOneUquvchi } = require('../controllers/uquvchi');

const router = require('express').Router();

// api/uquvchi/add

router.post('/add', createUquvchi)

// api/uquvchi/update/:id

router.put('/update/:id', updateUquvchi)

// api/uquvchi/remove/:id

router.delete('/remove/:id', removeUquvchi)

// api/uquvchi

router.get('/', getAllUquvchi)

// api/uquvchi/:id

router.get('/:id', getOneUquvchi)

module.exports = router;