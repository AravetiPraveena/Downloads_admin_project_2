const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(express.json());
app.use(cors());
const path = require("path");
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "downloads_admin_project",
});

app.get("/", (req, res) => {
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
// app.use(express.static('public'));
app.use(express.static('public'))

const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("ImageOfCard"), (req, res) => {
  const image = req.file.filename;
  const text = req.body.TextForCard;
  console.log("receiveed imagae", image);
  console.log("receiveed text", text);
  const values=[image,text]
  const sql = "insert into ug_cards (card_image,card_text) values (?,?)";
  db.query(sql, values, (err, data) => {
    if (err) {
      console.log(
        "error in the internal server in the server part while executing the query"
      );
      return res.status(500).json({ error: "Internal Server Error" });
    }
    return res.json({ status: "success" });
  });
});
app.get("/gettingData", (req, res) => {
  const sql = "select * from ug_cards ";
  db.query(sql, (err, result) => {
    if (err) {
      console.log("errror while fetching ");
    } else {
        console.log("data fetched successfully")
        return res.status(200).json(result)
    }
  });
});

app.listen(5007, () => {
  console.log("hi this is from server for cards");
});
