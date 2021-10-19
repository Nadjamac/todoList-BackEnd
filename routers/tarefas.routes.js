const express = require('express');
const TarefasController = require('./../controllers/tarefas.controllers');

const router = express.Router();
const tarefasController = new TarefasController();


const tarefas =
    [
        {       
                id:Date.now(),
                titulo: "MANHÃ",
                descricao: "Higienizacao",
                status: "aberto",
                prioridade:"alta",
                prazo: "5:30am"
                
        },

        {       
                id:Date.now(),
                titulo: "TARDE",
                descricao: "Entregar Planilha",
                status: "aberto",
                prioridade:"alta",
                prazo: "14:00"
                
        },
        
        {
                id:Date.now(),
                titulo: "TARDE",
                descricao: "Agendar Medica",
                status: "aberto",
                prioridade:"Media ",
                prazo: "20 de Dezembro"
                
        },

        {
                id:Date.now(),
                titulo: "Noite ",
                descricao: "Entregar Projeto ",
                status: "aberto",
                prioridade:"alta",
                prazo: "19 de Outubro",
              
        }
    ]
    


// [GET] /tarefa - Retorna a lista de vagas
router.get('/', tarefasController.getTarefas);

// [GET] /vagas/id - Returna uma unica vaga por id
router.get('/:id', tarefasController.getTarefasById);

// [POST] /vagas - Cria uma nova vaga no banco de dados
router.post('/', tarefasController.createtarefa);

// [PUT] /vagas/id - Atualiza uma nova vaga de acordo com o objeto recebido pelo front
router.put('/:id', tarefasController.editTarefa);


// [DELTE] /vagas/id - Excluir uma vaga de acordo com o seu id
router.delete('/:id', tarefasController.deleteTarefa);

module.exports = router;

