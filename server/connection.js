const mongoose = require("mongoose");

const connectDb = (dburl) =>{
    mongoose.connect(dburl).then(()=>{
        console.log("MongoDB connected Successfully");
    }).catch((error)=>{
        console.log(error);
    });
}

module.exports = connectDb;