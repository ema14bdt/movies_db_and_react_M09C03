const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/moviesAPIController');

//Rutas
//Listado de películas
/* api/movies */
router.get('/', moviesAPIController.list);
//Contador de películas
router.get('/total', moviesAPIController.total);
//Contador de premios
router.get('/awards', moviesAPIController.awards);
//Contador de premios
router.get('/last', moviesAPIController.lastMovie);
//Detalle de una película
router.get('/:id', moviesAPIController.detail);
//Filtrar películas por rating. Puede colocar desde 1 hasta 10
router.get('/recomended/:rating', moviesAPIController.recomended);
//Agregar una película
router.post('/create', moviesAPIController.create);
//Modificar una película
router.put('/update/:id', moviesAPIController.update);
//Eliminar una película
router.delete('/delete/:id', moviesAPIController.destroy);

module.exports = router;