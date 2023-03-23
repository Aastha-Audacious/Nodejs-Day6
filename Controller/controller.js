// temporary users array
const users = [];
// user signup routing
const signup = (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send("Name, Email, and Password are required!");
    }
    const user = users.find((user) => user.email === email);
    if (user) {
        return res.status(400).send("Email already exists!");
    }
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
      // log user data to console
  console.log(`New user: ${JSON.stringify(newUser)}`);

    users.push(newUser);
    return res.status(201).send("Signup Successful!");
};


module.exports = {
  signup
};
