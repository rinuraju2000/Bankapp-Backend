//Mongodb connection with nodejs

//1)Connection library  -mongoose - npm i mongoose

//Import Mongoose
const mongoose=require('mongoose')

//2)Define connection between mongoose and node
mongoose.connect('mongodb://localhost:27017/Bankapp')

//3)Create a model and schema for strong data
const User=mongoose.model('User',{
    username:String,
    acno:Number,
    password:String,
    balance:Number,
    transactions:[]
})

module.exports={
    User
}