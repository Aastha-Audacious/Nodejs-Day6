const express = require("express");
const app = express();
const port = 5003;
const router = require("./Routing/router");
const cookieParser = require("cookie-parser");
const path = require('path');
// const filePath = path.join(__dirname, 'public', 'index.html');


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));



// homepage routing
app.get("/downloaddd", (req, res, next) => {
  res.download(filePath);   //to download this file  (uncomment line -7)
})



app.get("/index.html", (req, res) => {
  // res.download(path.join(__dirname , "public",  "index.html"));      //to download this file  (uncomment line -16)
    res.sendFile(path.join(__dirname, '/index.html'));   // to show the content of index.html on browser (uncomment line -15)

  // res.status(200).send("<h1>Download file</h1>");
});


// app.get('/filee', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'));
// });


app.delete("/about", (req, res) => {
  res.send("aboutaa");
});


app.post("/posttt", (req, res)=>{
  try {
    uname = req.body.uname;
    email = req.body.email
    res.status(201).send({message: "user is created"});
    
  } catch (error) {
    res.status(500).send({message: "error in creating a user" + error.message});
  }
})

app.post("/postt/:email", (req, res)=>{
  try {
    email = req.params.email
    res.status(201).send({message: "user is created--params"});
    
  } catch (error) {
    res.status(500).send({message: "error in creating a user" + error.message});
  }
})

app.post("/post", (req, res)=>{
  try {
    email = req.query.email
    res.status(201).send({message: "user is created--query"});
    
  } catch (error) {
    res.status(500).send({message: "error in creating a user" + error.message});
  }
})

/*
app.disable('trust proxy')
console.log(app.get('trust proxy'));   //false
console.log(app.disabled('trust proxy'));   //true
*/

/*
app.enable('trust proxy')
console.log(app.get('trust proxy'));  //true
console.log(app.enabled('trust proxy'));  //true
*/

// app.set('trust proxy', 'loopback')
// app.set('name', ['loopback', 'linklocal', 'uniquelocal'])
// console.log(app.get('name'));

// app.set('trust proxy', function (ip) {
//   if (ip === '127.0.0.1' || ip === '123.123.123.123') return true // trusted IPs
//   else return false
// })

// app.set('etag', function (body, encoding) {
//   return generateHash(body, encoding) // consider the function is defined
// })

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send('Something broke!')
// })

app.post("/profile", function (req, res, next) {
  Uname = req.body.name;
  console.log(req.body);
  res.send("post");
});

// app.route('/aastha')
// .put(function (req, res) {
//  res.send("put")
// })
// .delete(function (req, res) {
//  res.send("delete")
// })
// .post(function (req, res) {
//   res.send("post")
// })
// .all(function (req, res) {
//   res.send("ALLL")
// });

app.get("/cookie", (req, res) => {
  res.cookie("name", "aastha", { maxAge: 10000, httpOnly: true });
  console.log(res.cookie);
  res.send({ message: "cookie is saved" });
});

app.get("/resh/aas", (req, res) => {
  console.dir(req.fresh); //false
  console.log(req.hostname); //l'ocalhost'
  console.log(req.ip); // ::1
  console.log(req.ips); //[]
  console.log(req.originalUrl); //  /resh
  console.dir(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  // console.log(req.params.name)
  console.log(req.protocol); //http
  console.log(req.route);
  console.log(req.protocol === "http"); //true
  console.log(req.stale); //true
  console.log(req.subdomains); //[]
  console.log(req.xhr); //false
  // Methods
  console.log(req.accepts("html")); //html
  console.log(req.accepts("application/json")); //application/json
  console.log(req.accepts("png")); //png
  console.log(req.get("content-type")); //undefined
  console.log(req.is('js'));   //null
  console.log(res.headersSent) // false
  res.send('OK')
  console.log(res.headersSent) // true

  res.send("fresh");
});

app.get("/random.text", (req, res) => {
  res.send("random.text");
});

/* 
Here are some examples of route paths based on string patterns.
This route path will match acd and abcd.
*/
app.get("/xy?ab", (req, res) => {
  res.send("Hello aastha ! xy?ab.....");
});

// This route path will match abcd, abbcd, abbbcd, and so on.
app.get("/pq+rs", (req, res) => {
  res.send("pq+rs");
});

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

// This route path will match /abe and /abcde.
app.get("/ab(cd)?e", (req, res) => {
  res.send("ab(cd)?e");
});

// Examples of route paths based on regular expressions:
// This route path will match anything with an “a” in it.
app.get(/f/, (req, res) => {
  res.send("/f/");
});

// This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, (req, res) => {
  res.send("/.*fly$/"); //not working
});

app.get("/name/:userId/email/:bookId", (req, res) => {
  res.send(req.params);
});

/*
app.get('/:color:colour:clr', (req, res)=>{         // use same route for multiple end points using params
  res.status(200).send("<h1>My color is green!</h1>");
})
*/

app.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section ...");
  res.status(200).send("<h1>Am a secret section!</h1>"); //Shows: Request Method: GET on console
  next(); // pass control to the next handler
});

// server port/listing
app.listen(port, () => {
  console.log(`Server is running at ${port} port!`);
  console.log(__dirname);
  console.dir(app.path()); // ''
});
