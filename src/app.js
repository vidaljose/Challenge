require('dotenv').config()

const express = require('express');
const morgan = require('morgan')
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


mongoose.connect('mongodb://localhost/challenge-node',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(db => console.log('db is connected'))
  .catch(err => console.log(err));

const post = [
  {
    username: 'admin',
    title: 'post 1'
  },
  {
    username: 'admin',
    title: 'post 1'
  }
]

const moviesRoutes = require('./routes/movies'); 
const othersRoutes = require('./routes/others'); 
const tvshowRoutes = require('./routes/tvshow'); 

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(express.json());
app.use(morgan('dev'));
const authenticateToken = (req,res,next) =>{
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}

//routes
app.use('/api/movies',authenticateToken,moviesRoutes); 
app.use('/api/tvshow',authenticateToken,tvshowRoutes); 
app.use('/api',authenticateToken,othersRoutes); 
app.post('/token',(req,res) =>{
  const username = req.body.username;
  const user = {name:username}

  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken})
});

// Start the server
app.listen(app.get('port'), () =>{
    console.log("Server on port ", app.get('port'));
})