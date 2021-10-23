const Product = require('../../../models/admin/product/product');
const fs = require('fs');
const path = require('path');
const slug = require('slug');


// GET LIST FOR BLOG
exports.listProductController = async (req, res) => {
    await Product.find({}).populate("category")
        .then(products => {
            res.status(200).json({ products });
        }).catch(err => {
            res.status(400).send({ err });
        });
}


// GET SINGLE RECORDS
exports.getSigleProductController = async (req, res) => {
    await Product.findById(req.params.id).populate("category")
        .then(product => {
            res.status(200).json({ product });
        }).catch(err => {
            res.status(400).send({ err });
        });
}




// CREATE BLOG 
exports.createProduct = (req, res) => {
    
    if (req.body.status === '' || req.body.status === undefined || req.body.status === null) {
        return res.status(400).json({
            message: "Status is required"
        });
    } else if (req.body.name === '' || req.body.name === undefined || req.body.name === null) {
        return res.status(400).json({
            message: "Product Name is required"
        });
    } else if (req.body.price === '' || req.body.price === undefined || req.body.price === null) {
        return res.status(400).json({
            message: "Price is required"
        });
    } else if (req.body.description === '' || req.body.description === undefined || req.body.description === null) {
        return res.status(400).json({
            message: "Description is required"
        });
    } else if (req.body.category === '' || req.body.category === undefined || req.body.category === null) {
        return res.status(400).json({
            message: "Category is required"
        });
    } else if (req.body.quantity === '' || req.body.quantity === undefined || req.body.quantity === null) {
        return res.status(400).json({
            message: "Quantity is required"
        });
    } else {
        // let productPictures = [];
        // if (req.files.length > 0) {
        //     productPictures = req.files.map((file) => {
        //         return { img: file.location };
        //     });
        // }

        const blogObj = {
            name: req.body.name,
            slug: slug(req.body.name),
            quantity: req.body.quantity,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            createdBy: req.user._id,
            status:req.body.status
        };

        if (req.file) {
            blogObj.productPictures = "/public/" + req.file.filename;
        }
        Product.findOne({ name: req.body.name }).exec((error, user) => {
            if (user) return res.status(400).json({
                message: "Product already registered"
            });
        const _product = new Product(blogObj);
            _product.save()
            .then(product => {
                res.status(201).json({ product });
            }).catch(err => {
                res.status(400).send({ err });
            });
        });
    }

}


// UPDATE BLOG 
exports.updateProduct = async (req, res) => {
    if (req.body.status === '' || req.body.status === undefined || req.body.status === null) {
        return res.status(400).json({
            message: "Status is required"
        });
    } else if (req.body.name === '' || req.body.name === undefined || req.body.name === null) {
        return res.status(400).json({
            message: "Product Name is required"
        });
    } else if (req.body.price === '' || req.body.price === undefined || req.body.price === null) {
        return res.status(400).json({
            message: "Price is required"
        });
    } else if (req.body.description === '' || req.body.description === undefined || req.body.description === null) {
        return res.status(400).json({
            message: "Description is required"
        });
    } else if (req.body.category === '' || req.body.category === undefined || req.body.category === null) {
        return res.status(400).json({
            message: "Category is required"
        });
    } else if (req.body.quantity === '' || req.body.quantity === undefined || req.body.quantity === null) {
        return res.status(400).json({
            message: "Quantity is required"
        });
    } else {
        
        const blogObj = {
            name: req.body.name,
            slug: slug(req.body.name),
            quantity: req.body.quantity,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            createdBy: req.user._id,
            oldprice: req.body.oldprice,
            youtubeurl:req.body.youtubeurl
        };

        // if (req.files.length > 0) {
        //     productPictures = req.files.map((file) => {
        //         return { img: file.location };
        //     });
        //     blogObj.productPictures =productPictures;
        // }


        if (req.file) {
            blogObj.productPictures = "/public/" + req.file.filename;
        }

        const _id = req.params.id;
        await Product.findOneAndUpdate({ _id }, { $set: blogObj }, {
            new: true,
        }).then(product => {
            res.status(200).json({ message: "Product updated successfully", product });
        }).catch(err => {
            res.status(400).send({ err });
        });
    }
       
}


// DELETE BLOG RECORDS
exports.deleteProduct = async (req, res) => {
    try {
        const blogId = req.params.id;
        if (blogId) {
            await Product.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: "Product deleted successfully" });
        } else {
            return res.status(400).json({ error: "Params required" });
        }
    } catch (err) {
        res.status(400).json({ error:err });
    }
};