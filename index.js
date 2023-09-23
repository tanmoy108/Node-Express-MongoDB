const express =require("express");
const server = express();

server.set("view engine","ejs")

server.get("/ejs",(_,res)=>{
    const useInfo = {
        name:"tanmoy",
        email:"tanmooy@gmail.com",
        skill:['js','react','node','c++']
    }
    res.render("new",{useInfo});
})

server.listen(8000,()=>{
    console.log("server connected")
})