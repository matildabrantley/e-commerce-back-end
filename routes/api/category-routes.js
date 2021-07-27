const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories, including its associated Products
  //TODO: use a Sequelize Model's find method (with await)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value, including its associated Products
  //TODO: use one of Sequelize Model's find method (with await)
});

router.post('/', async (req, res) => {
  // create a new category
  //TODO: use the Sequelize Model create method with await
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  //TODO: use a Sequelize Model put/update method with await
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  //TODO: use a Sequelize Model delete/destroy method with await
});

module.exports = router;
