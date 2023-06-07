const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json());         // vara input {email: 'fadf' , password: ''}

const User =[
    {
        email:'priku@gmail.com',
        password:'1332'
    } , {                                       //{ email: 'priku'}
        email:'prikkuu@gmail.com',
        password:'13732'
    }
]; 
app.get('/hello', (req,res) => {
    res.send('hello world');
})

app.post('/signup', (req,res) => {
    const {email,password} =req.body;

   const USEREXIST=User.find(user => user.email === email);
    if(USEREXIST)
    {
        res.status(400).json({error:'user already exist'});
    }

    app.push(email, password);
     
    res.status(200).send('user registered successfully');
})

app.listen(port, ()=> {
    console.log(`this server is running in ${port}`);
});

