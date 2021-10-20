const express = require('express');
const TarefasController = require('./../controllers/tarefas.controllers');

const router = express.Router();
const tarefasController = new TarefasController();

router.get('/', tarefasController.getTarefas);

router.get('/:id', tarefasController.getTarefasById);

router.post('/add', tarefasController.createTarefa);

router.put('/:id', tarefasController.editTarefa);


router.delete('/:id', tarefasController.deleteTarefa);

module.exports = router;

