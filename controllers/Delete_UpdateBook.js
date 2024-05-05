const express = require('express');
const bodyParser = require('body-parser');
const BookDB = require("../models/Book");

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

exports.deleteBook = async(req , res)=>{
  const {title} = req.params;
  try{
        await BookDB.findOneAndDelete({title}).exec();
        res.json({
            massage:"ลบหนังสือเรียบร้อย"
        });
  }catch(err){
    console.log(err);
  }
}

exports.updateBook = async (req, res) => {
  const { title: OldTitle } = req.params;
  const { title, content, author, image } = req.body;
  try {
      const updatedBook = await BookDB.findOneAndUpdate(
          { title: OldTitle },
          { title: title, content: content, author: author, image: image },
          { new: true }
      ).exec();
      res.json(updatedBook);
  } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' }); 
  }
};
