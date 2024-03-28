const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const db = require("./Database");
 
const app = express();
const port = 5007;
 
router.use(cors());
router.use(express.static('public'));


 
 
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
 
const upload = multer({ storage: storage });
 
 
 
 
 
router.get('/courses', async (req, res) => {
  try {
      const query = 'SELECT * FROM 1egquiz_courses';
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
 
 


 
  // router.get('/cardsexams/:courseId', (req, res) => {
  //   const courseId = req.params.courseId;
  //   const sql = `SELECT card_text FROM ug_cards WHERE course_id = ${courseId}`;
  //   db.query(sql, (err, result) => {
  //     if (err) {
  //       console.error('Error fetching exams:', err);
  //       res.status(500).json({ error: 'Internal Server Error' });
  //     } else {      
  //       res.json(result);
  //     }
  //   });
  // });





 
 
  // const fs = require('fs'); // Import the file system module
 
  // router.post('/upload', upload.single('pdfUpload'), (req, res) => {
  //   if (!req.file) {
  //     return res.status(400).json({ error: 'No file uploaded' });
  //   }
 
  //   const { examId } = req.body;
  //   const pdfName = req.file.filename;
 
  //   // Check if there's already a PDF with the same exam ID
  //   const selectQuery = `SELECT pdf_name FROM exams_pdfs WHERE exam_id = ?`;
  //   db.query(selectQuery, [examId], (selectError, selectResults) => {
  //     if (selectError) {
  //       console.error('Error checking existing PDF:', selectError);
  //       return res.status(500).json({ error: 'Error checking existing PDF' });
  //     }
 
  //     // If there's an existing PDF, delete it from the filesystem and the database
  //     if (selectResults.length > 0) {
  //       const existingPdfName = selectResults[0].pdf_name;
  //       fs.unlink(`path/to/pdf/${existingPdfName}`, (unlinkError) => {
  //         if (unlinkError) {
  //           console.error('Error deleting existing PDF:', unlinkError);
  //         }
  //       });
 
  //       const deleteQuery = `DELETE FROM exams_pdfs WHERE exam_id = ?`;
  //       db.query(deleteQuery, [examId], (deleteError, deleteResults) => {
  //         if (deleteError) {
  //           console.error('Error deleting existing PDF from database:', deleteError);
  //         }
  //       });
  //     }
 
  //     // Insert the new PDF into the database
  //     const insertQuery = `INSERT INTO exams_pdfs (pdf_name, exam_id) VALUES (?, ?)`;
  //     db.query(insertQuery, [pdfName, examId], (insertError, insertResults) => {
  //       if (insertError) {
  //         console.error('Error saving file to database:', insertError);
  //         return res.status(500).json({ error: 'Error saving file to database' });
  //       }
  //       console.log('File name saved to database successfully');
  //       return res.status(200).json({ message: 'File name saved to database successfully' });
  //     });
  //   });
  // });
 
 
 
 
 
  // router.get('/exams_pdfs', (req, res) => {
  //   // Query the database to retrieve PDF names and exam IDs from the exams_pdfs table
  //   const selectQuery = `SELECT * FROM exams_pdfs`;
  //   db.query(selectQuery, (error, results) => {
  //     if (error) {
  //       console.error('Error retrieving PDF names and exam IDs:', error);
  //       return res.status(500).json({ error: 'Error retrieving PDF names and exam IDs' });
  //     }
 
  //     res.status(200).json(results);
  //   });
  // });
 
  // router.use('/Uploads', express.static(path.join(__dirname, 'Uploads')));
  const fs = require('fs');
 
 
 
 
 
  // router.post('/upload', upload.fields([{ name: 'qs_pdf', maxCount: 1 }, { name: 'sol_pdf', maxCount: 1 }]), async (req, res) => {
  //     // const { course_id, exam_id, description } = req.body;
  //     const { course_id, exam_id, description } = req.body;
  //     const qs_pdf_name = req.files['qs_pdf'][0].originalname;
  //     const sol_pdf_name = req.files['sol_pdf'][0].originalname;
  // console.log( req.body )
  //     // Check if course_id is 102
  //     if (course_id !== '102') {
  //         return res.status(400).json({ message: 'Invalid course_id. Only course_id 102 is allowed.' });
  //     }
 
  //     try {
  //         // Insert data into the database
  //         const query = `
  //             INSERT INTO pgqs_sol_pdfs (course_id, exam_id, discription, qs_pdf_name, sol_pdf_name)
  //             VALUES (?)
  //         `;
  //         const values = [ req.body, qs_pdf_name, sol_pdf_name];
  //         await db.query(query, values);
  // console.log(values)
  //         // Move uploaded PDF files to the Uploads folder (assuming 'fs' and 'pool' are defined)
  //         const qsPdfPath = req.files['qs_pdf'][0].path;
  //         const solPdfPath = req.files['sol_pdf'][0].path;
  //         fs.renameSync(qsPdfPath, `Uploads/${qs_pdf_name}`);
  //         fs.renameSync(solPdfPath, `Uploads/${sol_pdf_name}`);
 
  //         res.json({ message: 'Files uploaded successfully and data saved to the database.' });
  //     } catch (error) {
  //         console.error(error);
  //         res.status(500).json({ message: 'Internal server error.' });
  //     }
  // });
 
 
 
//   router.post('/upload', upload.fields([{ name: 'qs_pdf', maxCount: 1 }, { name: 'sol_pdf', maxCount: 1 }]), async (req, res) => {
//     const { course_id, exam_id, description } = req.body;
//     const qs_pdf_name = req.files['qs_pdf'][0].originalname;
//     const sol_pdf_name = req.files['sol_pdf'][0].originalname;
//     console.log(req.body);
 
//     // Check if course_id is 102
//     if (course_id !== '102') {
//       return res.status(400).json({ message: 'Invalid course_id. Only course_id 102 is allowed.' });
//   }
 
//     try {
//         // Insert data into the database
//         const query = `
//         INSERT INTO pgqs_sol_pdfs (course_id, exam_id, description, qs_pdf_name, sol_pdf_name)
//         VALUES (?, ?, ?, ?, ?)
//     `;
//     const values = [course_id, exam_id, description, qs_pdf_name, sol_pdf_name];
//     await db.query(query, values);
 
//         // Move uploaded PDF files to the Uploads folder (assuming 'fs' and 'pool' are defined)
//         const qsPdfPath = req.files['qs_pdf'][0].path;
//     const solPdfPath = req.files['sol_pdf'][0].path;
//     fs.renameSync(qsPdfPath, `uploads/${qs_pdf_name}`);
//     fs.renameSync(solPdfPath, `uploads/${sol_pdf_name}`);
 
//     res.json({ message: 'Files uploaded successfully and data saved to the database.' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error.' });
//     }
// });
 
 
router.post('/upload', upload.fields([{ name: 'qs_pdf', maxCount: 1 }, { name: 'sol_pdf', maxCount: 1 }]), async (req, res) => {
  const { course_id, exam_id, description, date_column } = req.body;
  const qs_pdf_name = req.files['qs_pdf'][0].originalname;
  const sol_pdf_name = req.files['sol_pdf'][0].originalname;
 
  try {
      // Insert data into the database
      const query = `
          INSERT INTO pgqs_sol_pdfs (course_id, exam_id, Date_Year, description, qs_pdf_name, sol_pdf_name)
          VALUES (?, ?, ?, ?, ?, ?)
      `;
      const values = [course_id, exam_id, date_column, description, qs_pdf_name, sol_pdf_name];
      await db.query(query, values);
 
      // Move uploaded PDF files to the Uploads folder (assuming 'fs' and 'pool' are defined)
      const qsPdfPath = req.files['qs_pdf'][0].path;
      const solPdfPath = req.files['sol_pdf'][0].path;
      fs.renameSync(qsPdfPath, `uploads/${qs_pdf_name}`);
      fs.renameSync(solPdfPath, `uploads/${sol_pdf_name}`);
 
      res.json({ message: 'Files uploaded successfully and data saved to the database.' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error.' });
  }
});
 
 
 
 
 
// router.post('/upload', upload.fields([{ name: 'qs_pdf', maxCount: 1 }, { name: 'sol_pdf', maxCount: 1 }]), async (req, res) => {
//   const { course_id, exam_id, description } = req.body;
//   const qs_pdf_name = req.files['qs_pdf'][0].originalname;
//   const sol_pdf_name = req.files['sol_pdf'][0].originalname;
//   console.log(req.body);
 
//   try {
//       // Insert data into the database
//       const query = `
//           INSERT INTO pgqs_sol_pdfs (course_id, exam_id, description, qs_pdf_name, sol_pdf_name)
//           VALUES (?, ?, ?, ?, ?)
//       `;
//       const values = [course_id, exam_id, description, qs_pdf_name, sol_pdf_name];
//       await db.query(query, values);
 
//       // Move uploaded PDF files to the Uploads folder (assuming 'fs' and 'pool' are defined)
//       const qsPdfPath = req.files['qs_pdf'][0].path;
//       const solPdfPath = req.files['sol_pdf'][0].path;
//       fs.renameSync(qsPdfPath, `uploads/${qs_pdf_name}`);
//       fs.renameSync(solPdfPath, `uploads/${sol_pdf_name}`);
 
//       res.json({ message: 'Files uploaded successfully and data saved to the database.' });
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error.' });
//   }
// });
 
 
 
// router.get('/pdfs', async (req, res) => {
//   const pdf_s_id = req.params.pdf_s_id;
 
//   try {
//     const query = `
//       SELECT pdf_s_id, description, qs_pdf_name, sol_pdf_name
//       FROM pgqs_sol_pdfs
//     `;
//     const result = await db.query(query, [pdf_s_id]);
 
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'PDF not found' });
//     }
 
//     const pdfData = {
//       pdf_s_id: result.rows[0].pdf_s_id,
//       description: result.rows[0].description,
//       qs_pdf_url: result.rows[0].qs_pdf_name ? path.join('/uploads', result.rows[0].qs_pdf_name) : null,
//       sol_pdf_url: result.rows[0].sol_pdf_name ? path.join('/uploads', result.rows[0].sol_pdf_name) : null
//     };
 
//     res.json(pdfData);
//   } catch (error) {
//     console.error('Error fetching PDF:', error);
//     res.status(500).json({ message: 'Error fetching PDF. Please try again later.' });
//   }
// });
// router.get('/pdfs', async (req, res) => {
//   try {
//     const query = `
//       SELECT pdf_s_id, description, qs_pdf_name, sol_pdf_name FROM pgqs_sol_pdfs
//     `;
//     const result = await db.query(query);
 
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'No PDFs found' });
//     }
 
//     const pdfsData = result.rows.map(row => ({
//       pdf_s_id: row.pdf_s_id,
//       description: row.description,
//       qs_pdf_url: row.qs_pdf_name ? path.join('/uploads', row.qs_pdf_name) : null,
//       sol_pdf_url: row.sol_pdf_name ? path.join('/uploads', row.sol_pdf_name) : null
//     }));
 
//     res.json(pdfsData);
//   } catch (error) {
//     console.error('Error fetching PDFs:', error);
//     res.status(500).json({ message: 'Error fetching PDFs. Please try again later.' });
//   }
// });
 
// router.get('/pdfs', async (req, res) => {
//   try {
//     const query = `
//       SELECT *
//       FROM pgqs_sol_pdfs;
//     `;
//     const result = await db.query(query);
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Error fetching PDFs:', error);
//     res.status(500).json({ message: 'Error fetching PDFs. Please try again later.' });
//   }
// });
// router.get('/pdfs', (req, res) => {
//   const query = `
//     SELECT pdf_s_id, description, qs_pdf_name, sol_pdf_name
//     FROM pgqs_sol_pdfs;
//   `;
//   db.query(query)
//     .then(result => {
//       const pdfs = result.rows;
//       res.json(pdfs);
//     })
//     .catch(error => {
//       console.error('Error fetching PDFs:', error);
//       res.status(500).json({ message: 'Error fetching PDFs. Please try again later.' });
//     });
// });
 
  // router.get('/pdfs', (req, res) => {
  //   // Query the database to retrieve PDF names and exam IDs from the exams_pdfs table
  //   const selectQuery = `SELECT pdf_s_id, description,qs_pdf_name, qs_pdf_name, sol_pdf_name FROM pgqs_sol_pdfs`;
  //   db.query(selectQuery, (error, results) => {
  //     if (error) {
  //       console.error('Error retrieving PDF names and exam IDs:', error);
  //       return res.status(500).json({ error: 'Error retrieving PDF names and exam IDs' });
  //     }
 
  //     res.status(200).json(results);
  //   });
  // });
 
 
 
 
// router.get('/exams_pdfs', (req, res) => {
//   // Query the database to retrieve PDF names and exam IDs from the exams_pdfs table
//   const selectQuery = `SELECT * FROM pgqs_sol_pdfs`;
//   db.query(selectQuery, (error, results) => {
//     if (error) {
//       console.error('Error retrieving PDF names and exam IDs:', error);
//       return res.status(500).json({ error: 'Error retrieving PDF names and exam IDs' });
//     }
 
//     res.status(200).json(results);
//   });
// });
 
// router.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
 
 
 
 
router.get('/exams_pdfs', (req, res) => {
  // Query the database to retrieve the specified columns from the pgqs_sol_pdfs table
  const selectQuery = `SELECT * FROM pgqs_sol_pdfs`;
  db.query(selectQuery, (error, results) => {
    if (error) {
      console.error('Error retrieving PDF details:', error);
      return res.status(500).json({ error: 'Error retrieving PDF details' });
    }
   
    try {
      // Map over the results and add the file paths for qs_pdf_name and sol_pdf_name
      const pdfsWithFilePaths = results.map(pdf => {
        return {
          ...pdf,
          qs_pdf_path: `/uploads/${pdf.qs_pdf_name}`,
          sol_pdf_path: `/uploads/${pdf.sol_pdf_name}`
        };
      });
 
      res.status(200).json(pdfsWithFilePaths);
    } catch (err) {
      console.error('Error mapping PDF details:', err);
      res.status(500).json({ error: 'Error mapping PDF details' });
    }
  });
});


// router.get("/exams_pdfs/:exam_id/:course_id", (req, res) => {
//     const { exam_id, course_id } = req.params;
//     const sql = "SELECT * FROM exams_pdfs WHERE exam_id = ? AND course_id = ?";

//     db.query(sql, [exam_id, course_id], (err, result) => {
//         if (err) {
//             console.log("Error while fetching data:", err);
//             return res.status(500).json({ error: "Internal Server Error" });
//         } else {
//             console.log("Data fetched successfully from the PDFs table");
//             return res.status(200).json(result);
//         }
//     });
// });

 
 
// router.use('/uploads', express.static('Uploads')); // Serve static files from the Uploads folder
 
// const PORT = process.env.PORT || 5000;
// router.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// router.get('/iitjeemaindownload/:exam_id/:course_id', (req, res) => {
//   const { exam_id, course_id } = req.params;
//   const selectQuery = ' SELECT * FROM `pgqs_sol_pdfs` WHERE course_id = ? AND exam_id = ?';
 
//   db.query(selectQuery, [course_id, exam_id], (error, results) => {
//     if (error) {
//       console.error('Error retrieving PDF details:', error);
//       return res.status(500).json({ error: 'Error retrieving PDF details' });
//     }
//     res.status(200).json(results);
//   });
// });
                                                                
// app.get('/exams_pdfs/:exam_id/:course_id', (req, res) => {
//   const { exam_id, course_id } = req.params;

//   // Query the database to fetch PDFs based on exam_id and course_id
//   const selectQuery = 'SELECT * FROM pgqs_sol_pdfs WHERE exam_id = ? AND course_id = ?';
//   db.query(selectQuery, [exam_id, course_id], (error, results) => {
//     if (error) {
//       console.error('Error fetching PDFs:', error);
//       return res.status(500).json({ error: 'Error fetching PDFs' });
//     }
//     res.status(200).json(results); // Send the PDFs as JSON response
//   });
// });




router.get('/exams_pdfs/:exam_id/:course_id', (req, res) => {
  const { exam_id, course_id } = req.params;

  // Query the database to retrieve the specified columns from the pgqs_sol_pdfs table
  const selectQuery = 'SELECT * FROM pgqs_sol_pdfs WHERE exam_id = ? AND course_id = ?';
  db.query(selectQuery, [exam_id, course_id], (error, results) => {
    if (error) {
      console.error('Error retrieving PDF details:', error);
      return res.status(500).json({ error: 'Error retrieving PDF details' });
    }
   
    try {
      // Map over the results and add the file paths for qs_pdf_name and sol_pdf_name
      const pdfsWithFilePaths = results.map(pdf => {
        return {
          ...pdf,
          qs_pdf_path: `/uploads/${pdf.qs_pdf_name}`,
          sol_pdf_path: `/uploads/${pdf.sol_pdf_name}`
        };
      });
 
      res.status(200).json(pdfsWithFilePaths);
    } catch (err) {
      console.error('Error mapping PDF details:', err);
      res.status(500).json({ error: 'Error mapping PDF details' });
    }
  });
});









// delete functionality


// router.delete('/exams_pdfs/:exam_id/:course_id', (req, res) => {
//   const { exam_id, course_id } = req.params;

//   // Query the database to delete the specified row from the pgqs_sol_pdfs table
//   const deleteQuery = 'DELETE FROM pgqs_sol_pdfs WHERE exam_id = ? AND course_id = ?';
//   db.query(deleteQuery, [exam_id, course_id], (error, results) => {
//     if (error) {
//       console.error('Error deleting PDF:', error);
//       return res.status(500).json({ error: 'Error deleting PDF' });
//     }
   
//     // Check if any row was affected
//     if (results.affectedRows === 0) {
//       return res.status(404).json({ error: 'No PDF found for deletion' });
//     }

//     res.status(200).json({ message: 'PDF deleted successfully' });
//   });
// });


// end

  


// course creation

// router.post('/saveCourse', (req, res) => {
//   const { course_id, course_name } = req.body;
//   const sql = 'INSERT INTO 1egquiz_courses (`course_id`, `course_name`) VALUES (?, ?)';
//   db.query(sql, [course_id, course_name], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error saving course' });
//     } else {
//       res.status(200).json({ message: 'Course saved successfully' });
//     }
//   });
// });


router.post('/saveCourse', (req, res) => {
  const { course_id, course_name } = req.body;
  const sqlSelect = 'SELECT * FROM 1egquiz_courses WHERE course_id = ?';
  db.query(sqlSelect, [course_id], (selectErr, selectResult) => {
    if (selectErr) {
      console.error(selectErr);
      res.status(500).json({ message: 'Error checking existing course' });
    } else {
      // If the result contains rows, it means the course already exists
      if (selectResult.length > 0) {
        console.log('Course already exists');
        res.status(400).json({ message: 'Course already exists' });
      } else {
        // Course does not exist, insert it into the database
        const sqlInsert = 'INSERT INTO 1egquiz_courses (`course_id`, `course_name`) VALUES (?, ?)';
        db.query(sqlInsert, [course_id, course_name], (insertErr, insertResult) => {
          if (insertErr) {
            console.error(insertErr);
            res.status(500).json({ message: 'Error saving course' });
          } else {
            console.log('Course saved successfully');
            res.status(200).json({ message: 'Course saved successfully' });
          }
        });
      }
    }
  });
});


// end




// Exam creation 


// Assuming you have initialized your Express app and set up your database connection

router.post('/saveExam', (req, res) => {
  const { course_id, exam_name } = req.body;
  // Query to get the maximum exam_id for the given course_id
  const getMaxExamIdQuery = 'SELECT MAX(exam_id) AS max_exam_id FROM 2egquiz_exam WHERE course_id = ?';
  db.query(getMaxExamIdQuery, [course_id], (err, result) => {
    if (err) {
      console.error('Error getting max exam ID:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Increment the maximum exam_id by 1 to generate the new exam_id
      const newExamId = result[0].max_exam_id ? result[0].max_exam_id + 1 : 1;
      // Insert the new exam into the database
      const insertExamQuery = 'INSERT INTO 2egquiz_exam (course_id, exam_id, exam_name) VALUES (?, ?, ?)';
      db.query(insertExamQuery, [course_id, newExamId, exam_name], (err, result) => {
        if (err) {
          console.error('Error saving exam:', err);
          res.status(500).json({ error: 'Error saving exam' });
        } else {
          res.status(200).json({ message: 'Exam saved successfully' });
        }
      });
    }
  });
});




// end





module.exports = router;