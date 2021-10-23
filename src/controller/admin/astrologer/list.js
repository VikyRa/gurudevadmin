const Astrologer = require('../../../models/astrologer/astrologer');
const bcrypt = require('bcrypt');
var validator = require("email-validator");
const jwt = require('jsonwebtoken');

exports.getAstrologer = async (req,res)=>{
             await Astrologer.find({})  
            .then(result => {
                res.status(200).json({user:result});
            }).catch(err => {
                res.status(400).send({ error:err });
            });
}

exports.singleAstrologer = async (req,res)=>{
    try{
        const result = await Astrologer.findById(req.params.id);
        // console.log(result);
        return res.status(200).json(result);
    }catch(error){
        return res.status(400).json({error:error});
    }
} 


 
exports.createAstrologer = async (req, res) => {
    try {
        Astrologer.findOne({ astro_email: req.body.astro_email }).exec((error, user) => {
            if (user) return res.status(400).json({
                message: "Email already registered"
            });
            Astrologer.findOne({ astro_mobile: req.body.astro_mobile }).exec((moerror, mobileuser) => {
                if (mobileuser) return res.status(400).json({
                    message: "Mobile already registered"
                });
                const {
                    astrofirst_name,
                    astrolast_name,
                    astro_email,
                    astro_mobile,
                    astro_gender,
                    astro_password
                } = req.body;
                if (astrofirst_name == '') {
                    return res.status(400).json({
                        message: "First Name is required"
                    });
                } else if (astrolast_name == '' || astrolast_name === null) {
                    return res.status(400).json({
                        message: "Last Name is required"
                    });
                } else if (astro_email == '' || astro_email === null) {
                    return res.status(400).json({
                        message: "Email is required"
                    });
                } else if (astro_gender == '' || astro_gender === null) {
                    return res.status(400).json({
                        message: "Gender is required"
                    });
                } else if (astro_password == '' || astro_password === null) {
                    return res.status(400).json({
                        message: "Password is required"
                    });
                } else if (astro_mobile == '' || astro_mobile === null) {
                    return res.status(400).json({
                        message: "Mobile is required"
                    });
                } else if (!validator.validate(astro_email)) {
                    return res.status(400).json({
                        message: "Email is invalid"
                    });
                } else {

                    bcrypt.hash(req.body.astro_password, 10).then((astro_password) => {
                        const _user = new Astrologer({
                            astrofirst_name,
                            astrolast_name,
                            astro_email,
                            astro_mobile,
                            astro_gender,
                            astro_password
                        });
                        _user.save((error, data) => {
                            if (error) {
                                return res.status(400).json({
                                    message: "Something went worng",
                                    errors: error.message
                                })
                            }
                            if (data) {
                                return res.status(201).json({message: "Astrologer added succesfully"})
                            }
                        });
                    });
                }
            });
        });
    } catch (err) {
        return res.status(400).json({ error: err });
    }
}



exports.deleteastrologer = async (req,res)=>{
    try{
        if(req.params.id =='' || req.params.id == null){
            res.status(400).json({message:"Some thing went wong"});
        }else{
            await  Astrologer.findByIdAndDelete(req.params.id);
            res.status(200).json({message:"Astrologer delete successfully "});
        }
       
    }catch(err){
        res.status(401).json({error:err});
    }
}


exports.updateastrologerdetails = async (req, res) => {
   await  Astrologer.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true}).then(updateuser => {
            res.status(200).json({message:"Astrologer updated successfully ",updateuser});
        }).catch(err => {
            res.status(400).send({ err });
        });
        
};