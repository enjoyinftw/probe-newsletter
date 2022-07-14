const { Router } = require('express');
const { create, findAll } = require('../Users/user.controller');
const router = Router();

router.post('/create', create);
router.get('/findall', findAll);

module.exports = router;
