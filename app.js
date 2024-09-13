const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/test'
mongoose.connect(url)
    .then(() => {
        console.log('jala')
    })
    .catch((err) => {
        console.log('no jala', err)
    })

    const usersSchema = new mongoose.Schema({
        name: {type: String, required: true},
        age: {type: Number, required: true}
    },{ collection: 'users' })

    const User = mongoose.model('User',usersSchema)

    User.create({
        name:"maluma",
        age:20
    })