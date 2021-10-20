const mongoose = require('mongoose');

const TarefasServices = require('../services/tarefas.service');

const tarefasService = new TarefasServices();

class TarefasController {
  
  getTarefas = async (req, res) => {
    const tarefas  = await tarefasService.findAll();
    res.send(tarefas);
  }

  getTarefasById = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(403).send({message: 'Id Invalido'});
      return;
    }

    const tarefa = await tarefaService.findById(id);

    // tratamento de erro se existe a vaga ou nao no banco de dados.
    if(!tarefaObj) {
      res.status(404).send({message: 'tarefa não encontrada'});
      return
    }

    res.status(200).send(tarefa);
  }

  createTarefa = async (req,res) => {
    const tarefa = req.body;
    const tarefaSalvar = await tarefasService.createTarefa(tarefa)
    .then(() => {
      res.send({ message: `tarefa criada com sucesso` });
    })
    .catch((err) => res.status(500).send({error: `erro no servdor: ${err}`}));
  }

  editTarefa = async (req, res) => {
    const id = req.params.id;
    const tarefa = req.body;
    await tarefasService.editTarefa(id, tarefa)
    .then(() => {
      res.status(200).send({message: 'Tarefa atualizada com sucesso'});
    })
    .catch((err) => res.status(500).send({error: `erro no servdor: ${err}`}));
  }

  deleteTarefa = async (req, res) => {
    const id = req.params.id;
    await tarefasService.deleteTarefa(id)
    .then(() => res.status(200).send({message: 'Excluido com sucesso'}));
  }
}

module.exports = TarefasController;