const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://admin:admin@cluster0-pxouh.mongodb.net/aircnc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3333)

//GET, POST, DELETE
//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edi��o, delete)
//req.body = Acessar corpo da requisi��o (Para Cria��o, edi��o)

/* app.get('/', (req, res) => {
  return res.json({ message : "hello World" })
}) */
/* app.post('/users', (req, res) => {
  return res.json({ message : "hello World" })
}) */
/* app.put('/users/:id', (req, res) => {
  return res.json({ id : req.params.id })
}) */


