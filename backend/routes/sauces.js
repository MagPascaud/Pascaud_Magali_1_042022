const {Router} = require('express');
const {getAllSauces,getOneSauce,createOneSauce,updateOneSauce,deleteOneSauce,likeOrDislikeOneSauce} = require('../controllers/sauces');

const router = Router();

router.get('/sauces', getAllSauces);
router.get('/sauces', getOneSauce);
router.post('/sauces', createOneSauce);
router.put('/sauces', updateOneSauce);
router.delete('/sauces', deleteOneSauce);
router.post('/sauces', likeOrDislikeOneSauce);


module.exports = router;