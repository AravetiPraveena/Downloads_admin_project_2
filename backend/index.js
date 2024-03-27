// const express = require("express");
// const cors = require("cors");
// const nodemon = require("nodemon");
// const mysql = require("mysql");
// const bcrypt = require("bcryptjs");
// const cookieParser = require("cookie-parser");
// const nodemailer=require("nodemailer")
// const jwt = require("jsonwebtoken");
 




// const app = express();
// const port = 5007;
 
// app.use(cors());
// app.use(express.static('public'));

// //------------------------------------------Import server.js files-------------------------------//

// const ExamCards = require('./ServerForCards');
// app.use("/ExamCards", ExamCards);

// const ExamsUploaderAdimpage = require('./server1');
// app.use("/ExamsUploaderAdimpage", ExamsUploaderAdimpage);




// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
const express = require("express");
const cors = require("cors");
const nodemon = require("nodemon");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const nodemailer=require("nodemailer")
const jwt = require("jsonwebtoken");
const multer = require('multer');
const app = express();



const path = require('path');
const bodyParser = require('body-parser');
const port = 5007;
app.use(cookieParser());
app.use(express.json());
app.use(cors())
const Database = require("./Database");

const server = require("./server");

const server1 = require("./server1");
const server2 = require("./server2");
const ServerForCards = require("./ServerForCards");

app.use("/server", server);
app.use("/server1", server1);
app.use("/server2", server2);
app.use("/ServerForCards", ServerForCards);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });