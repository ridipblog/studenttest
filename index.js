const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');
const upload=require('express-fileupload');
const cookieParser=require('cookie-parser');
const session=require('express-session');
// app.use('/public',express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,"./views/"));
app.set('view engine','hbs');
const env=require('dotenv');
app.use(cookieParser());
app.use(upload());
app.use(session({secret:"ses",resave:true,saveUninitialized:true}));
env.config({path:'./require/config.env'});
const port=process.env.PORT || 3000;
var home=require('./route/home');
var profile=require('./route/profile');
// var test=require('./route/test');
var form2=require('./route/form2');
var form3=require('./route/form3');
var logout=require('./route/logout');
var error=require('./route/error');
var mainpage=require('./route/mainpage');
app.use('/',home);
app.use('/',profile);
// app.use('/',test);
app.use('/',form2);
app.use('/',form3);
app.use('/',logout);
app.use('/',mainpage);
app.use('/',error);
app.listen(port);