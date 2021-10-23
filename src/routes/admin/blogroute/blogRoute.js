const express = require('express');
const router = express.Router();
const { requireSignin, adminMiddleware,upload } = require('../../../common-middleware');
const { createBlog, listBlogController, getSigleRecordController, updateblog, deleteblog } = require('../../../controller/admin/blog/blogController');


router.post('/admin/blog/create',requireSignin,adminMiddleware,upload.single('thumbnail'),createBlog);
router.get('/admin/blog',requireSignin,adminMiddleware,listBlogController);
router.get('/admin/blog/:id',requireSignin,adminMiddleware,getSigleRecordController);
router.put('/admin/blog/update/:id',requireSignin,adminMiddleware,upload.single('thumbnail'),updateblog);
router.delete('/admin/blog/delete/:id',requireSignin,adminMiddleware,deleteblog);
module.exports = router;