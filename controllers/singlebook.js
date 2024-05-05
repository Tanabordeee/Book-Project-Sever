const BookDB = require("../models/Book");
exports.singlebook = async (req , res)=>{
    const { title } = req.params;
    try{
        const book = await BookDB.find({title}).exec();
        res.json(book);
    }catch(err){
        console.log(err);
    }
}