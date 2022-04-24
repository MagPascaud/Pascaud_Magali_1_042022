const {Router} = require('express');
const {getAllSauces,getOneSauce,createOneSauce,updateOneSauce,deleteOneSauce,likeOrDislikeOneSauce} = require('../controllers/sauces');

const router = Router();
const auth = require('../middlewares/auth');


router.get('/', auth, getAllSauces);
router.get('/:id', auth, getOneSauce);
router.post('/', auth, createOneSauce);
router.put('/:id', auth, updateOneSauce);
router.delete('/:id', auth, deleteOneSauce);
router.post('/:id/likeOrDislikeOneSauce', auth, likeOrDislikeOneSauce);


module.exports = router;