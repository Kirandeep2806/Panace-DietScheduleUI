require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require('cors');
const User = require("./model/user");
const diet = require("./model/dietDetails");
const auth = require("./middleware/auth");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors({
    origin: '*'
}));

app.post("/register", async (req, res) => {
  try {
    // Get user input
    const { first_name, last_name, email, password } = req.body;
    console.log(first_name, last_name, email, password);

    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
      return ;
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });
    

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    console.log(token);
    console.log(typeof(user));
    // return new user
  return res.status(201).send(user);
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;
    console.log(req.body);

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

app.get("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.post("/diet", async (req, res) => {
    const {token, email, date, rows} = req.body;
    console.log(email);
    const dietDetails = await diet.find({$and: [{"email":email},{"date":date}]});
    console.log(rows);
    if(dietDetails.length !== 0) {
        console.log("skjhgke");
        diet.findOneAndUpdate({$and: [{"email":email},{"date":date}]},{$set: {"rows":rows}}, {new: true}).then(data => {
            console.log(data);
        }).catch(err => console.log(err));
        res.status(200).send("Succussful");
    }
    else {
        diet.create({email,date,rows});
        console.log("xhgvh");
        res.status(200).send("Succussful");
    }
});

app.post("/dietData", async (req, res) =>{
    const {email, date} = req.body;
    console.log("Hello Diet");
    console.log(req.body);
    const dietDetails = await diet.find({$and: [{"email":email},{"date":date}]});
    console.log(dietDetails);
    if(dietDetails.length === 0) res.status(200).send([]);
    else res.status(200).send(dietDetails[0].rows);
});

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;