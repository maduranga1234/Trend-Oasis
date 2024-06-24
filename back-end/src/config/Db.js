const mongoose = require("mongoose")

const mondbUrl = "mongodb+srv://madurangasadaruwan0817:iNMro0rHJGTLU63W@cluster0.08gcwt3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);

}

module.exports={connectDb} 