const {Router} = require('express');
const {getAllSauces,getOneSauce,createOneSauce,updateOneSauce,deleteOneSauce,likeOrDislikeOneSauce} = require('../controllers/sauces');

const router = Router();
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

//Création des routes sauces
router.get('/', auth, getAllSauces);
router.get('/:id', auth, getOneSauce);
router.post('/', auth, multer, createOneSauce);
router.put('/:id', auth, multer, updateOneSauce);
router.delete('/:id', auth, deleteOneSauce);
router.post('/:id/like', auth, likeOrDislikeOneSauce);


module.exports = router;