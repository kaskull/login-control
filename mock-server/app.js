const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const UsersJson = require('./users.json')
let LastLoginJson = require('./lastLogin.json')

router.get('/checkUser', (request,response) => {
    resultUser = UsersJson.filter((user)=>{
        if(user.email == request.query.email && user.password == request.query.password){
            return user;
        }
    });
    if(resultUser.length>0){
        lastLogin = LastLoginJson.filter((timer)=>{
            if(timer.email == request.query.email){
                return timer;
            }
        });
        return response.status(200).json(lastLogin[0]);
    }
    else{
        return response.status(200).json(undefined);
    }
    
});

router.post('/updateUser', (request,response) => {
   this.LastLoginJson = LastLoginJson.map((lastLogin) => {
        if(request.body.params.email == lastLogin.email){
            lastLogin.lastLoginTime = request.body.params.date;
            return lastLogin;
        }
        else{
            return lastLogin
        }
      });
    return response.status(200).json();
});

app.use("/", router);
app.listen(3000,() => {
    console.log("Started on PORT 3000");
})