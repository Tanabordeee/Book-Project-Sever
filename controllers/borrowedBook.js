const BookDB = require("../models/Book");
exports.borrowedBook = async (req , res)=>{
    const { username : who } = req.params;
    try{
        const who_borrowing = await BookDB.find({who}).exec();
        res.json(who_borrowing);
    }catch(err){
        console.log(err);
    }
}

exports.givebackBook = async (req , res) =>{
    const { title: OldTitle} = req.params;
    try {
        const givebackBook = await BookDB.findOneAndUpdate(
            { title: OldTitle },
            { borrowing : "not_yet" , who : "Admin"},
            { new: true }
        ).exec();
        res.json(givebackBook);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
}