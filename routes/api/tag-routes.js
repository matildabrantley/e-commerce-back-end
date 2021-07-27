const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags, including its associated Product data
  //TODO: use a Sequelize Model's find method (with await)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`, including its associated Product data
  //TODO: use one of Sequelize Model's find method (with await)
});

router.post('/', async (req, res) => {
  // create a new tag
  //TODO: use the Sequelize Model create method with await
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  //TODO: use a Sequelize Model put/update method with await
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  //TODO: use a Sequelize Model delete/destroy method with await
});

module.exports = router;
