const BookDB = require("../models/Book");

exports.borrowingBook = async (req , res)=>{
    const { title: OldTitle  , username : who} = req.params;
    try {
        const borrowingBook = await BookDB.findOneAndUpdate(
            { title: OldTitle },
            { borrowing : "Already" , who : who},
            { new: true }
        ).exec();
        res.json(borrowingBook);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' }); 
    }
}