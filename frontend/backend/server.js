const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemon = require("nodemon");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const nodemailer=require("nodemailer")
const jwt = require("jsonwebtoken");
const db = require("./Database");
router.use(cookieParser());
router.use(express.json());
router.use(cors())




router.post('/register',(req,res)=>{
  const sql='insert into user_credentials (user_name, user_email, user_password) values (?,?,?)'
  
  const values=[
    req.body.name,req.body.email,req.body.password
  ]
  db.query(sql, values,(err,result)=>{
    if(err) console.log(err+" this  error occured while inserting into the database")
    else{
      console.log(result)
      return res.json(result)
  }
  })
})

router.post('/login',(req,res)=>{
  const sql='select * from user_credentials where `user_email`= ? and `user_password`=?'
  const { email, password } = req.body;
  const values=[email,password]
  db.query(sql,values,(err,data)=>{
    if(err){
      return res.json("error while logging in")
    }
    if(data.length>0){
      console.log(data)
      return res.json("success")
    }
    else {
      return res.json("fail")
    }
  })
})

// router.post('/forgotPassword',(req,res)=>{
//   const email=req.body;
//   const checkUser='select * from user_credentials where user_email=?'
//   db.query(checkUser,email,(err,result)=>{
//      if(err){
//            console.log("Error checking user existence")
//        }
//   })

// })

router.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;
  console.log(email+"in forgotPassword endpont from server")

  try {
    // Check if the user exists in the MySQL database
    const checkUserSql = "SELECT * FROM user_credentials WHERE user_email = ?";
    db.query(checkUserSql, [email], async (error, results) => {
      if (error) {
        console.error("Error checking user existence:", error);
        return res.status(500).json({ Status: "Internal server error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ Status: "User not existed" });
      }
      const user = results[0];

      const token = jwt.sign({ id: user.user_id }, "jwt_secret_key", {
        expiresIn: "1d", 
      });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "webdriveegate@gmail.com",
          pass: "qftimcrkpkbjugav",
        },
      });

      const mailOptions = {
        from: "webdriveegate@gmail.com",
        to: email,
        subject: "Reset Password Link",
        text: `http://localhost:3000/resetPageToTest/${user.user_id}/${token}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ Status: "Internal server error" });
        } else {
          return res.json({ Status: "Success" });
        }
      });
    });
  } catch (error) {
    console.error("Error during forgot password:", error);
    return res.status(500).json({ Status: "Internal server error" });
  }
});


router.post("/resetPageToTest/:id/:token", (req, res) => {
  const { id, token } = req.params;
  const { resetPassword } = req.body;

  jwt.verify(token, "jwt_secret_key", (err, decoded) => {
    if (err) {
      return res.json({ Status: "Error with token" });
    } else {
      //when the token is valid, we are updating db.
      // Update the password in the MySQL database
      const updatePasswordSql = "UPDATE user_credentials SET user_password = ? WHERE user_id = ?";
      db.query(
        updatePasswordSql,
        [resetPassword, id],
        (updateError, updateResults) => {
          if (updateError) {
            console.error("Error updating password:", updateError);
            return res.json({ Status: "Error updating password" });
          }

          return res.json({ Status: "Success" });
        }
      );
    }
  });
});

router.get('/protected',(req,res)=>{
    const user={id:56};
    const tokenSending=jwt.sign({user},'my_secret_key');
    res.json({token:tokenSending})
})
router.get('/verifyToken',(req,res)=>{
  jwt.verify(req.token,'my_secret_key',(err,result)=>{
    if(err){
      res.sendStatus(403);
    }
    else{
      res.json({
        text:"from the backend to verify",
        data:data
      })
    }
  })
})
 
module.exports = router;