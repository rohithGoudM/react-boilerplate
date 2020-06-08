const express  = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser  = require("body-parser");
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const keys = require('./config/keys');
const cookieSession = require('cookie-session')
const passport = require('passport')
const PORT  = process.env.PORT || 5000
require('./models/User')
require('./services/passport')


mongoose.connect(keys.mongoURI,()=>{
    console.log("connected to db")
})


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 *1000,
        keys:[keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session())

app.use('/auth',authRoutes);
app.use('/api',apiRoutes);
// require('./routes/authRoute')(app)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT,()=>{
    console.log("server running on "+ PORT)
})