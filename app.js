const express = require("express");
const app = express();
const path = require("path");
require("./src/db/connect");
const register = require("./src/model/registers");
const port = process.env.PORT || 7000;

// Add this line to parse JSON bodies
app.use(express.json());

app.post('/register', async (req, res) => {
    const { first_name, last_name, gender, email, mobile } = req.body;
    console.log(req.body)
    try {
         const newUser = new register.User({ 
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            yearofbirth: req.body.yearofbirth,
            mobile: req.body.mobile,
            email: req.body.email,
            organisation: req.body.mobile,
         });

         await newUser.save();
         res.status(201).json({ message: 'user registered successfully' });
         } catch (error) {
         console.error(error);
         res.status(500).json({ error: 'Error While loading' });
     }
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'My website' });
});

app.listen(port, () => {
    try{
        console.log({message: `Server is connecting to the port ${port}`});
    }
    catch (error){
        console.log({error : `Error while connecting to the ${port}`});

    }
});
