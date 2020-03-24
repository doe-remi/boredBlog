const router = require('express').Router();

router.use('/api', require('./blogRoutes'));
router.use('/api', require('./userRoutes'));

module.exports = router;
