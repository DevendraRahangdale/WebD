const express=require("express");
const app=express();
const port=8080;

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");


});
app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
 const instadata=require("./data.json");
 const data=instadata[username];

 console.log(data);
  

    if(data){
          res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }

});


app.get("/home",(req,res)=>{
    res.send("Hello");
});
app.get("/rolldice",(req,res)=>{
    let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{dicevalue});
});


app.listen(port,()=>{
    console.log(`Listing on the port' ${port}`)
})