const BookDB = require("../models/Book");
exports.search = async(req , res) =>{
    const title = req.body.Search;
    if(!title){
        try{
            const findbook = await BookDB.find().exec();
            res.json(findbook);
        }catch(err){
            console.log(err);
        }
    }else{
        try{
            const findbook = await BookDB.find({title}).exec();
            res.json(findbook);
        }catch(err){
            console.log(err);
        }
    }
}