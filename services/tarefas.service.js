const Tarefa = require('../models/tarefa');

class TarefaService {
  findAll = async () => await Tarefa.find();
  
  findById = async (id) => {
    return await Tarefa.findById(id);
  }
  
  createTarefa = async (tarefa) => {
    return await Tarefa.create(tarefa);
  }

  editTarefa = async (id, tarefa) => {
    return await Tarefa.updateOne({ _id: id }, tarefa);
  }

  deleteTarefa = async (id) => {
    return await Tarefa.deleteOne({ _id: id});
  }

}
module.exports = TarefaService;