const BookDB = require("../models/Book");

exports.Add_book = async (req, res) => {
    const { title, content, author , image} = req.body;
    try {
        const newBook = await BookDB.create({ title, content, author, image });
        res.json(newBook);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};
