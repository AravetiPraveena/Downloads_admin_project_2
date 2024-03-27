const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemon = require("nodemon");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const nodemailer=require("nodemailer")
const jwt = require("jsonwebtoken");
const app = express();
router.use(cookieParser());
router.use(express.json());
router.use(cors())
const path=require('path')
const multer=require('multer')
const db = require("./Database");


// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database:'downloads_admin_project'
// });
 
// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to database:', err.code);
//     console.error(err.message);
//     return;
//   }
//   console.log('Connected to the database');
// });



router.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});                                                                                                                                                                                                
 
  const upload = multer({ storage: storage });
 
 
 
 
 
 
router.get('/courses', async (req, res) => {
    try {
      const query = 'SELECT * FROM 1egquiz_courses where course_id between 101 and 102 ';
      db.query(query, (error, results) => {
        if (error) {
          console.error('Error fetching courses:', error);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
        res.json(results);
      });
    } catch (error) {
      console.error('Error fetching courses:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
 
 
  router.get('/exams/:courseId', (req, res) => {
    const courseId = req.params.courseId;
    const sql = `SELECT * FROM 2egquiz_exam WHERE course_id = ${courseId}`;
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching exams:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(result);
      }
    });
  });
 
  const fs = require('fs');




router.post('/upload', upload.fields([{ name: 'qs_pdf', maxCount: 1 }, { name: 'sol_pdf', maxCount: 1 }]), async (req, res) => {
  const { course_id, exam_id, description } = req.body;
  const qs_pdf_name = req.files['qs_pdf'][0].originalname;
  const sol_pdf_name = req.files['sol_pdf'][0].originalname;

  // Check if course_id is 101
  if (course_id !== '101') {
    return res.status(400).json({ message: 'Invalid course_id. Only course_id 101 is allowed.' });
  }

  try {
    // Insert data into the database
    const query = `
      INSERT INTO ug_qs_sol_pdfs (course_id, exam_id, description, qs_pdf_name, sol_pdf_name)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [course_id, exam_id, description, qs_pdf_name, sol_pdf_name];
    await db.query(query, values);

    // Move uploaded PDF files to the Uploads folder
    const qsPdfPath = req.files['qs_pdf'][0].path;
    const solPdfPath = req.files['sol_pdf'][0].path;
    fs.renameSync(qsPdfPath, `Uploads/${qs_pdf_name}`);
    fs.renameSync(solPdfPath, `Uploads/${sol_pdf_name}`);

    res.json({ message: 'Files uploaded successfully and data saved to the database.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});






router.get('/exams_pdfs', (req, res) => {
  // Query the database to retrieve the specified columns from the pgqs_sol_pdfs table
  const selectQuery = `SELECT description, qs_pdf_name, sol_pdf_name FROM ug_qs_sol_pdfs`;
  db.query(selectQuery, (error, results) => {
    if (error) {
      console.error('Error retrieving PDF details:', error);
      return res.status(500).json({ error: 'Error retrieving PDF details' });
    }
   
    // Map over the results and add the file paths for qs_pdf_name and sol_pdf_name
    const pdfsWithFilePaths = results.map(pdf => {
      return {
        ...pdf,
        qs_pdf_path: `/uploads/${pdf.qs_pdf_name}`,
        sol_pdf_path: `/uploads/${pdf.sol_pdf_name}`
      };
    });
 
    res.status(200).json(pdfsWithFilePaths);
  });
});
 
 



router.get("/", (req, res) => {
    res.send("hi this is from server2.json");
  });
  // router.listen(5007, () => {
  //   console.log("listening in server 2");
  // });
   
module.exports = router;