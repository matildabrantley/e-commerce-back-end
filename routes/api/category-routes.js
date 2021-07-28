const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories, including its associated Products
  try {
  let allCategories = await Category.findAll(req.params.id, 
    {include: [{model: Product}]} );
    res.status(200).json(allCategories);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value, including its associated Products
  try {
  let category = await Category.findByPk(req.params.id, 
    {include: [{model: Product}]} );
    res.status(200).json(category);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
  let newCategory = await Category.create(req.body);
  res.status(200).json(newCategory);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
  let updatedCategory = await Category.update(req.body, 
    {where: {id: req.params.id}} );
  res.status(200).json(updatedCategory);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    let deletedCategory = await Category.destroy( {where: {id: req.params.id}} );
    res.status(200).json({response: "Category with id " + req.params.id + " deleted!"});
    }
    catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
