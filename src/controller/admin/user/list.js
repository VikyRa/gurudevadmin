const User = require('../../../models/user/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getuser = async (req,res)=>{
        try{
            const result = await User.find({});
           
            return res.status(200).json({user:result});
        }catch(error){
            return res.status(400).json({error:error});
        }
}

exports.singleuser = async (req,res)=>{
    try{
        const result = await User.findById(req.params.id);
        // console.log(result);
        return res.status(200).json(result);
    }catch(error){
        return res.status(400).json({error:error});
    }
} 



exports.userstats = async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    await User.aggregate([
            {
                $project:{
                    month:{ $month : "$createdAt"},
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1}
                }
            } 
        ])  .then(user => {
            res.status(200).json({ user });
        }).catch(err => {
            res.status(400).send({ err });
        });
   

}

