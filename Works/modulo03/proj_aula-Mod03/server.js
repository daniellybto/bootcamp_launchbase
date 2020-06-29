const express = require('express')
const nunjucks = require('nunjucks')


const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false, //permite passar URLs por texto normal
  noCache: true
})


// ---- ROTAS ---- //
server.get("/", function(req, res){
  const about = {
    avatar_url: "me.jpeg",
    name: "Danielly Brito",
    role: "Estudante Full Stack - Bootcamp LauchBase 2.0",
    description: "Programadora Full Stack Jr - Estudante - Estudando sempre as mais novas tecnologias utilizadas no mercado!",
    links: [{
      name: "Github",
      url: "https://github.com/daniellybto"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/daniellybto/"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/daniellybto"
    }]
  }
  
  return res.render("about", {about: about})
})
server.get("/portfolio", function(req, res){
  return res.render("portfolio" , {items: videos} )
})

server.get("/video" , function(req, res){
  const id = req.query.id

  const video = videos.find(function(video){
    //caso seja false irá pular essa condição!
    return video.id == id
  })

  if (!video){
    return res.send("VIDEO NOT FOUND!!")
  }
  return res.render("video", {item: video})
    
})


// ---- CONFIGURAR PORTA DO SERVIDOR! ---- //
server.listen(5000, function(){
  console.log("Server is running!!!!")
})