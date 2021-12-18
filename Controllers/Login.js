const  {Auth}=  require('../Modules/Auth')

const GetData = (req)=>{   
    let DataBody = ''
      return new Promise((resolve, reject) => {
        req.on('data', chunk => {
            DataBody = chunk.toString();
        })
        req.on("end", () => {
            resolve(DataBody);
        });
      });
  }

const GetUsers = async (req,res) =>{
    let MyData = await GetData(req)
    try {
        const users = await Auth(req,res,JSON.parse(MyData));
        let UserData = JSON.stringify(users)
        if(JSON.parse(UserData).length > 0){
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(UserData);
        }
        else{
            res.writeHead(401, { "Content-Type": "application/json" });
            res.end();
        }
      } catch (error) {
          console.log(error)
      }
}
module.exports = {GetUsers}
