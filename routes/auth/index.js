const { Router } = require("express");
const passport = require('passport');

const authRouter = Router();

 authRouter.get('/google',passport.authenticate('google',{
    scope:['profile','email']
}))
authRouter.get('/facebook',
  passport.authenticate('facebook'));

authRouter.get("/google/callback",passport.authenticate('google'),(req,res)=>{
    res.redirect('/')
})
authRouter.get("/facebook/callback",passport.authenticate('facebook',{
    successRedirect:'/profile'
}))

authRouter.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/')
})

module.exports = authRouter;


