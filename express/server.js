const express = require('express')
const app = express()


app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (req, res) => {
  res.send(`
  <form action ="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `)
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send(`Seu nome é <b>${req.body.nome}</b>`)
})

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000')
  console.log('Servidor bombando na porta 3000')
})
