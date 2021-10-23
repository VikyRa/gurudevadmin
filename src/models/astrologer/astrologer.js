const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const astrologerSchema = new mongoose.Schema({
    astrofirst_name: {
        type: String,
        trim: true,
        min: 3,
        max: 30
    },
    astrolast_name:{
        type:String,
        trim:true, 
        min: 3,
        max: 30

    },
    astro_email: {
        type: String,
        trim: true,
        unique: true,
    },
    astro_password: {
        type: String,
        trim: true,
        min: 3,
    },
    astro_mobile: {
        type: Number,
        min: 10,
        unique: true,
    },
    
    astro_gender:{
        type:String,
    },
    astrologer_slug:{
        type: Date
    },
    per_hours_charge:{
        type:String
    },
    astro_profilePicture: {
        type: String
    },
    astro_status:{
        type: String,
        enum: ['1', '2'],
        default: '1'
    }
}, { timestamps: true });

module.exports = mongoose.model('Astrologer',astrologerSchema);