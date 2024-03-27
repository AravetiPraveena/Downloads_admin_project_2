const express = require("express");
const router = express.Router();
const cors = require("cors");
const multer = require("multer");
const app = express();
const db = require("./Database");

router.use(express.json());
router.use(cors());
const path = require("path");
const mysql = require("mysql");


router.get("/", (req, res) => {
  return res.send("hi from the server of cards");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let destinationFolder = "public/";
    const fileExtension = path.extname(file.originalname).toLowerCase();
    cb(null, destinationFolder);
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
// router.use(express.static('public'));
router.use(express.static('public'))

const upload = multer({
  storage: storage,
});

// router.post("/upload", upload.single("ImageOfCard"), (req, res) => {
//   const image = req.file.filename;
//   const text = req.body.TextForCard;
//   console.log("receiveed imagae", image);
//   console.log("receiveed text", text);
//   const values=[image,text]
//   const sql = "insert into ug_cards (card_image,card_text) values (?,?)";
//   db.query(sql, values, (err, data) => {
//     if (err) {
//       console.log(
//         "error in the internal server in the server part while executing the query"
//       );
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//     return res.json({ status: "success" });
//   });
// });

router.post("/upload_image", upload.single("image"), (req, res) => {
  const courseId = req.body.courseId;
  const examId = req.body.examId;
  const text = req.body.text;
  const image = req.file.filename;

  const sql = "INSERT INTO ug_cards (course_id, exam_id, card_text, card_image) VALUES (?, ?, ?, ?)";
  const values = [courseId, examId, text, image];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error("Error inserting data into database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json({ status: "success" });
  });
});




// router.get("/gettingData", (req, res) => {
//   const sql = "select * from  2egquiz_exam_modified where course_id=101";
 
//   db.query(sql, (err, result) => {
//     if (err) {
//       console.log("errror while fetching ");
//     } else {
//         console.log("data fetched successfully in the cards table")
//         return res.status(200).json(result)
//     }
//   }
//   );
 
// }
// );



router.get("/gettingData", (req, res) => {
  const sql = "SELECT * FROM ug_cards"; // Select only necessary columns

  db.query(sql, (err, result) => {
    if (err) {
      console.log("Error while fetching data:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Data fetched successfully from the cards table");
      return res.status(200).json(result);
    }
  });
});



// app.get('/ServerForCards/gettingData/:courseId', (req, res) => {
//   const courseId = req.params.courseId;
//   const sql = 'SELECT * FROM cards_table WHERE course_id = ?';

//   db.query(sql, [courseId], (err, result) => {
//     if (err) {
//       console.log("Error while fetching data:", err);
//       return res.status(500).json({ error: "Internal Server Error" });
//     } else {
//       console.log("Data fetched successfully from the cards table");
//       return res.status(200).json(result);
//     }
//   });
// });


 
module.exports = router;