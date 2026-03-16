const router = require('express').Router();
const tourRoutes = require("../../routes/client/tour.route");
const homeRoutes = require("../../routes/client/home.route");

router.use('/', homeRoutes)
router.use('/tours', tourRoutes)

module.exports = router;