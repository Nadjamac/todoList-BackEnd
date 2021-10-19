// importo o model
const tarefa = require('../models/tarefa');

// Retorna todas as vagas
class TarefaService {
  // conecta com o modelo e retorna a lista de vagas
  findAll = async () => await tarefa.find();
  
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