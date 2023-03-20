// const users = [];

// const signup = (req, res) => {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//         return res.status(400).send("Name, Email, and Password are required!");
//     }
//     const user = users.find((user) => user.email === email);
//     if (user) {
//         return res.status(400).send("Email already exists!");
//     }
//     const newUser = {
//         name,
//         email,
//         password
//     };
//     users.push(newUser);
//     return res.status(201).send("Signup Successful!");
// };


// module.exports = {
//   signup
// };
