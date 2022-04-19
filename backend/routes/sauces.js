const {Router} = require('express');
const {getAllSauces,getOneSauce,createOneSauce,updateOneSauce,deleteOneSauce,likeOrDislikeOneSauce} = require('../controllers/sauces');

const router = Router();

router.get('/', getAllSauces);
router.get('/:id', getOneSauce);
router.post('/', createOneSauce);
router.put('/:id', updateOneSauce);
router.delete('/:id', deleteOneSauce);
router.post('/:id/likeOrDislikeOneSauce', likeOrDislikeOneSauce);


module.exports = router;