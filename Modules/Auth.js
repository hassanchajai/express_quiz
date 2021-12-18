
const { json } = require('body-parser');
const {con} = require('./Config')

const Auth = (req,res,MyData)=>{   
    return new Promise((resolve, reject) => {
        con.query(`SELECT FullName FROM users where Email = '${MyData.Email}' AND Password = '${MyData.Password}'`, (err, result) => {
          if (err) throw err;
          resolve(result);
        });
    });
}
module.exports = {Auth}
