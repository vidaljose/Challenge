const router = require('express-promise-router')();

const {
    index, newTvshow
} = require('../controllers/tvshow');

router.get('/:name', index);
router.post('/', newTvshow);

module.exports = router;