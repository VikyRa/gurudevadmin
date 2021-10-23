const express = require('express');
const { requireSignin, adminMiddleware } = require('../../../common-middleware');
const { getAstrologer, singleAstrologer, createAstrologer, deleteastrologer,updateastrologerdetails } = require('../../../controller/admin/astrologer/list');
const { getcallhistory } = require('../../../controller/admin/user/callhistroy');
const { uservalidation } = require('../../../validators/admin/user/user');

const router = express.Router();
const {isRequestValidated}  = require('../../../validators/auth');


router.get('/admin/atrologer/list',isRequestValidated,isRequestValidated,requireSignin,adminMiddleware,getAstrologer);
router.post('/admin/atrologer/create',isRequestValidated,requireSignin,adminMiddleware,createAstrologer);
router.delete('/admin/atrologer/delete/:id',isRequestValidated,requireSignin,adminMiddleware,deleteastrologer);
router.get('/admin/atrologer/getdetail/:id',isRequestValidated,requireSignin,adminMiddleware,singleAstrologer);
router.put('/admin/atrologer/update/:id',isRequestValidated,requireSignin,adminMiddleware,updateastrologerdetails);

// CALL HISTORY ROUTE
// router.get('/admin/user/callhistory/:id',isRequestValidated,isRequestValidated,requireSignin,adminMiddleware,getcallhistory);
module.exports = router;