if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');


const tarefasRouter = require('./routers/tarefas.routes');
const conn = require('./conn/conn');

const app = express();
app.use(express.json())
app.use(cors());
conn();

app.use('/tarefas',tarefasRouter)

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

conn(db_url, db_user, db_pass, db_data);

app.get('/', (req, res) => {
  res.send('WELCOME');
})

const port = 3500
;

app.listen(process.env.PORT || port, () => {
  console.log(`O servidor da aplicação está rodando em: http://localhost:${port}`);
});
