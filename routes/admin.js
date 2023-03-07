const { createAdmin, updateAdmin, removeAdmin, getAll, getOne } = require('../controllers/admin');

const router = require('express').Router();

// api/admin/add

router.post('/add', createAdmin )

// api/admin/update/:id

router.put('/update/:id', updateAdmin)

// api/admin/remove/:id

router.delete('/remove/:id', removeAdmin)

// api/admin

router.get('/', getAll)

// api/admin/id

router.get('/:id', getOne)


module.exports = router