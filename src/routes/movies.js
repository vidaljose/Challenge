const router = require('express-promise-router')();

const {
    index, newMovie, indexLimit,indexName,indexNameLimit
} = require('../controllers/movies');

router.get('/', index);
router.get('/limit/:limit', indexLimit);
router.get('/sorted', indexName);
router.get('/sorted/:limit', indexNameLimit);
router.post('/', newMovie);

module.exports = router;