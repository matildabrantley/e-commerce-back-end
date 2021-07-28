const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags, including its associated Product data
  try {
    let tag = await Tag.findAll(req.params.id, 
      {include: [{model: Product}]} );
      res.status(200).json(tag);
    }
    catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`, including its associated Product data
  try {
    let tag = await Tag.findByPk(req.params.id, 
      {include: [{model: Product}]} );
      res.status(200).json(tag);
    }
    catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    let newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
    } 
    catch (err) {
      res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    let updatedTag = await Tag.update(req.body, 
      {where: {id: req.params.id}} );
    res.status(200).json(updatedTag);
    }
    catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    let deletedTag = await Tag.destroy( {where: {id: req.params.id}} );
    res.status(200).json({response: "Tag with id " + req.params.id + " deleted!"});
    }
    catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
