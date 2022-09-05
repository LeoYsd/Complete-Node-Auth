const mongoose = require('mongoose')

//lets connect database
const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI,{

    })
}