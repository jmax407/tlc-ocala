const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true, unique: true },
    images: [{ type: String, required: false}],
    creator: {type: String, required: true, ref: 'User'},
    date: { type: Date, default: Date.now }
})

postSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Post', postSchema)