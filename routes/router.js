const { Router } = require('express');
const { create, findAll, findByName } = require('../Users/user.controller');
const router = Router();

router.post('/create', create);
router.get('/findall', findAll);
router.get('/findbyname', findByName);

module.exports = router;
