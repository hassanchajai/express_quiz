
const http = require('http');
const fs = require('fs');
const url = require('url');
const bodyparser = require('body-parser');
const {con} = require('./Modules/Config');
const  {GetUsers} = require('./Controllers/Login');
const ejs = require('ejs'); 

const Rendring = (req,res) =>{
    let MyURL = url.parse(req.url, true);
    let MyEndPoint = "./Views" + MyURL.pathname + ".ejs";
    if(MyURL.pathname === "/"){
        let Data = {name:"faical"}
        ejs.renderFile('./Views/Index.ejs', Data,function(err, str){
            res.end(str)
        });
    }
    else if(MyURL.pathname.includes('Api'))
    {        // we can access HTTP headers


        GetUsers(req, res)
    }
    else{
        let Data = {name:"faical"}
        ejs.renderFile(`${MyEndPoint}`, Data,function(err, str){
            res.end(str)
        });
    }
}

http.createServer(function (req, res) {
    Rendring(req, res)
}).listen(8080);
// con.end()



// const express = require('express')
// const router = require('./Router')

// const app = express()


// app.use(express.json())
// app.use(express.static("Public"));
// app.use('/', router)
// app.set('views', './Views')
// app.set('view engine','ejs')

// const listener = app.listen(process.env.PORT || 8080, () => {
//     console.log('Your app is listening on port ' + listener.address().port)
// })