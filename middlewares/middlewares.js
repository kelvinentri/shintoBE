const jwt=require('jsonwebtoken')
const verify =(req,res,next)=>{
    const token =req.headers['authorization'].split(' ')[1]
    jwt.verify(token,process.env.JWT_PASS,(err,decodedToken)=>{
if(decodedToken){
    next()
}else{
    res.status(401).json({message:'unauthorized user'})
}
    })
}

module.exports={verify}