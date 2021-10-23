const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Technique 1 (generate a salt and hash on separate function calls):
const salt = bcrypt.genSaltSync(saltRounds);
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        trim: true,
        min: 3,
        max: 30
    },
    last_name:{
        type:String,
        trim:true, 
        min: 3,
        max: 30

    },
    email: {
        type: String,
        trim: true,
        unique: true,
    },
    hash_password: {
        type: String,
        trim: true,
        min: 3,
    },
    mobile: {
        type: Number,
        min: 10,
        unique: true,
    },
    
    gender:{
        type:String,
    },
    date_of_birth:{
        type: Date
    },
    birth_hours:{
        type:String
    },
    birth_minutes:{
        type:String
    },
    birth_second:{
        type:String
    },
    birth_place:{
        type:String
    },
    profilePicture: {
        type: String
    },
    status:{
        type: String,
        enum: ['1', '2'],
        default: '1'
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin',
    }
}, { timestamps: true });

// userSchema.virtual('password').set(function(password) {
//     console.log('password');
//     this.hash_password = bcrypt.hashSync(password, salt);
// });

// userSchema.virtual("fullName").get(function() {
//     return `${this.firstname} ${this.lastname}`;
// });


// userSchema.method = {
//     authenticate: function(password) {
//         return bcrypt.compare(password, this.hash_password);
//     }
// }

// userSchema.methods = {
//     authenticate: async function(password) {
//         return await bcrypt.compare(password, this.hash_password);
//     },
// };


module.exports = mongoose.model('User', userSchema);