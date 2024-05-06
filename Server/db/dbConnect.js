const mongoose = require('mongoose');

uri = 'mongodb+srv://akshaykumarhiran2:I0awaRndXuin1Nto@shoes-project.nwcfg1h.mongodb.net/Shoes-Project?retryWrites=true&w=majority&appName=Shoes-Project';

const connectDB = ()=>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });

}

module.exports = connectDB;