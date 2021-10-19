const express = require('express');
const cors = require('cors');


const tarefasRouter = require('./routers/tarefas.routes');
const conn=require('./conn/conn');

const app = express();
app.use(express.json())
app.use(cors());
conn();

app.use('/tarefas',tarefasRouter)


app.get('/', (req, res) => {
  res.send('WELCOME');
})

app.get('/tarefas', (req, res) => {
  res.send('WELCOME');
})
const port = 3000
;

app.listen(port, () => {
  console.log(`O servidor está rodando em (´http://localhost:${port}/`);
})
