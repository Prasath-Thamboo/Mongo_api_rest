const mongoose = require('mongoose')

//mongoose Schema
const Schema = mongoose.Schema;

//pokemon schema
const UserSchema = new Schema({
    username: String,
    password: String,
    created: {
        type: Date,
        default: new Date()
    }
})

//model
const UserModel = mongoose.model('user', UserSchema)

//export
module.exports = UserModel