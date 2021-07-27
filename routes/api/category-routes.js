const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories, including its associated Products
  let allCategories = await Category.findAll(req.params.id, 
    {include: [{model: Product}]} );
    res.status(200).json(allCategories);

router.get('/:id', async (req, res) => {
  // find one category by its `id` value, including its associated Products
  let category = await Category.findByPk(req.params.id, 
    {include: [{model: Product}]} );
    res.status(200).json(category);
  }

router.post('/', async (req, res) => {
  // create a new category
  let newCategory = await Category.create(req.body);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  let updatedCategory = await Category.update(req.body);
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  let deletedCategory = await Category.destroy(req.body);
});

module.exports = router;
