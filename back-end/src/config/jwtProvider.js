
const jwt = require("jsonwebtoken")

const SECRET_KEY="mskjdjfpqeijskncnjglskdid90909090jjjabcqwwwwwwweeee"

const genarateToken= (userId)=>{

    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}



const getUserIdFromToken=(token)=>{

    const decodedToken=jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}

module.exports={genarateToken,getUserIdFromToken}