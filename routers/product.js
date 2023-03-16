const productController = require('../controllers/productController.js')
const router = require('express').Router();

router.get('/',productController.productAll);
router.get('/:Id',productController.getOne);
router.post('/', productController.productPost);
router.put('/:Id',productController.UpdateProduct)
router.delete('/:Id', productController.productDelete);

module.exports = router;