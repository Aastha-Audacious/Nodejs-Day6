const express = require("express");
const app = express();
const port = 5002;

// middleware
app.use(express.json());

// temporary users array
const users = [];

// homepage routing
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome, Please login first!</h1>");
});

// user signup routing
app.post("/signup", (req, res) => {
  const { name, email, gender, bloodgroup, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("Name, Email, Gender, Bloodgroup, and Password are required!");
  }
  const user = users.find((user) => user.email === email);
  if (user) {
    return res.status(400).send("Email already exists!");
  }
  const newUser = {
    name,
    email,
    gender,
    bloodgroup,
    password,
  };
  users.push(newUser);

  // log user data to console
  console.log(`New user: ${JSON.stringify(newUser)}`);
  return res.status(201).send("Signup Successful!");
});

// server port/listing
app.listen(port, () => {
  console.log(`Server is running at ${port} port!`);
});
