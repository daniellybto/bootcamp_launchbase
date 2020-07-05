const EXPRESS = require('express')
const NUNJUCKS = require('nunjucks')
const RECEITAS = require("./data")

const SERVER = EXPRESS()

SERVER.use(EXPRESS.static('public'))

SERVER.set("view engine", 'njk')

NUNJUCKS.configure("views", {
  express: SERVER,
  autoescape: false, //permite passar URLs por texto normal
  noCache: true
})

//---- ROTAS
SERVER.get("/", function(req, res){
  return res.render("index", {receitas: RECEITAS})
})
SERVER.get("/sobre", function(req, res){
  return res.render("sobre")
})
SERVER.get("/receitas", function(req, res){
  return res.render("receitas", {receitas: RECEITAS})

})

// SERVER.get("/receita", function(req, res){
//   return res.render("receita")
// })

SERVER.get("/receita/:index", function(req, res){
  //recebe o index do url, exemplo: /receita/4, daí no caso o index é o o '4'
  const URLINDEX = req.params.index
  const RECEITA = RECEITAS[URLINDEX]

  return res.render("receita", {receita: RECEITA})

})


SERVER.listen(9000, function(){
  console.log("Server is running!")
})