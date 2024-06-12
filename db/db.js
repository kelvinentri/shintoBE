
const mongoose =require('mongoose')
const connectDB=async()=>{
    //mongodb://127.0.0.1:27017/e31-server
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('data base connected successfully');
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB