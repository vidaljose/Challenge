const router = require('express-promise-router')();

const { indexActor, indexDirector, newActor, newDirector } = require('../controllers/others');

// router.get('/actor', indexActor);
// router.get('/director', indexDirector);
router.post('/actor', newActor);
router.post('/director', newDirector);

module.exports = router;