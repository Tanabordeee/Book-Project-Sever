const BookDB = require("../models/Book");
exports.getbook = async (req , res) =>{
    try{
        const books = await BookDB.find().exec();
        res.json(books);
    }catch(err){
        console.log(err);
    }
}