const Router = require('express')
const router = new Router()
const placemarkController = require('../controller/placemark.controller')

router.get('/getplacemarks', placemarkController.getPlacemarks)
router.post('/addplacemark', placemarkController.addPlacemark)

module.exports = router