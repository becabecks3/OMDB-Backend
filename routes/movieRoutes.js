const express = require('express');
const movieRouter = express.Router();
const checkApiKey = require('../middlewares/auth_api_key')
const movieController = require('../controllers/movieController');


movieRouter.post('/', checkApiKey, movieController.createMovies);
movieRouter.get('/:title?', movieController.getMovies);
movieRouter.put('/', checkApiKey, movieController.updateMovies);
movieRouter.delete('/:title?', checkApiKey, movieController.deleteMovies);


module.exports = movieRouter;
