import { Schema, model } from "mongoose"

const usersSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
},{ collection: 'users' })

export const User = new model('User',usersSchema)