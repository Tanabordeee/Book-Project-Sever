const UserDB = require("../models/User")
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.Login = async (req , res) =>{
    const { username , password } = req.body;
    try{
        const CheckUser = await UserDB.find({username , password}).exec();
        if(CheckUser[0].username && CheckUser[0].password){
            if(CheckUser[0].username=== "admin"){
                const token = jwt.sign({username} , process.env.JWT_SECRET , {expiresIn:"1d"});
                const admin_token = jwt.sign({password} , process.env.JWT_SECRET , {expiresIn:"1d"});
                res.json({token , username , admin_token});
            }else{
                const token = jwt.sign({username} , process.env.JWT_SECRET , {expiresIn:"1d"});
                res.json({token , username});
            }
        }
    }catch(err){
        res.status(404).json({error:"Username or Password Incorrect"});
    }
}

exports.Register = async (req , res) =>{
    const {username , password} = req.body;
    try{
        const Register = await UserDB.create({username , password});
        res.json(Register);
    }catch(err){
        res.status(404).json({error:"มีชื่อซ้ำกัน"})
    }
}

exports.requireLogin = expressJwt.expressjwt({
    secret : process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})