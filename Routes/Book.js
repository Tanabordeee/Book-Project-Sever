const express = require('express');
const router = express.Router();
const { Login, Register} = require("../controllers/login_register_controller");
const { Add_book } = require("../controllers/Add_book");
const { getbook } = require("../controllers/get_book");
const { search } = require("../controllers/search");
const { deleteBook , updateBook } = require("../controllers/Delete_UpdateBook");
const { singlebook } = require("../controllers/singlebook");
const { borrowingBook } = require("../controllers/borrowing");
const { borrowedBook, givebackBook } = require("../controllers/borrowedBook")
const { requireLogin  } = require("../controllers/login_register_controller");
// const multer = require("multer");
// const { v4: uuidv4 } = require("uuid");
// const uploads = multer({ dest: 'uploads/' });
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, "../client/src/image");
//     },
//     filename: function(req, file, cb) {
//         cb(null, uuidv4() + ".jpg");
//     }
// });

// const upload = multer({
//     storage: storage
// });

router.post("/login", Login);
router.post("/register", Register);
// router.post("/add_book", upload.single("image"),requireLogin, Add_book);
router.get("/books",getbook);
router.post("/search",requireLogin ,search);
router.delete("/delete/:title",requireLogin , deleteBook);
// router.put("/update/:title" , uploads.single("image"),requireLogin, updateBook);
router.get("/singlebook/:title",requireLogin , singlebook);
router.put("/borrowing/:title/:username",requireLogin , borrowingBook);
router.get("/borrowed/:username",requireLogin , borrowedBook);
router.put("/giveback/:title",requireLogin , givebackBook);
module.exports = router;
