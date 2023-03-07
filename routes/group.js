const { createGroup, updateGroup, removeGroup, getAllGroups, getOneGroup } = require('../controllers/group');

const router = require('express').Router();

// api/group/add

router.post('/add', createGroup )

// api/group/update/:id

router.put('/update/:id', updateGroup)

// api/group/remove/:id

router.delete('/remove/:id', removeGroup)

// api/group

router.get('/', getAllGroups)

// api/group/:id

router.get('/:id', getOneGroup )

module.exports = router;