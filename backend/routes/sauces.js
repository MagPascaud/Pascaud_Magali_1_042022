const {Router} = require('express');
const {getAllSauces,getOneSauce,createOneSauce,updateOneSauce,deleteOneSauce,likeOrDislikeOneSauce} = require('../controllers/sauces');

const router = Router();

router.get('/getAllSauces', getAllSauces);
router.get('/getOneSauce', getOneSauce);
router.post('/createOneSauce', createOneSauce);
router.put('/updateOneSauce', updateOneSauce);
router.delete('/deleteOneSauce', deleteOneSauce);
router.post('/likeOrDislikeOneSauce', likeOrDislikeOneSauce);


module.exports = router;