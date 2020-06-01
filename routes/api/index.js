const { Router } = require("express");
const passport = require('passport');

const apiRouter = Router();

apiRouter.get('/current_user',(req,res)=>{
	console.log(req.user);
    res.send(req.user)
})

module.exports = apiRouter;


