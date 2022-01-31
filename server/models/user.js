

const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    actions:{
        type:'string',
        required:true
    },
    des:{
        type:'string',
        required:true
    }

})



const Datas = mongoose.model('Datas', userSchema);
module.exports = { Datas }