# E-Commerce Back-End
Summary - Interact with a complete E-Commerce back-end through a REST API client (such as Insomnia or Thunder Client). Routes implement C.R.U.D. operations on an ORM database through Sequelize.
#### Matilda Brantley
### [Live GitHub Page](https://matildabrantley.github.io/e-commerce/)
## Routes
* Product Routes
  * GET -  findAll: retrieve all products
  * GET -  findByPK: find one product by its `id` value, including its associated Products
  * POST -  create: new products
  * PUT - update a products by its `id` value
  * DELETE - delete a products by its `id` value
* Category Routes
  * GET -  findAll: retrieve all categories, including their associated products
  * GET -  findByPK: find one category by its `id` value, including its associated Products
  * POST -  create: new category
  * PUT - update a category by its `id` value
  * DELETE - delete a category by its `id` value
* Tag Routes
  * GET -  findAll: retrieve all tags
  * GET -  findByPK: find one tag by its `id` value
  * POST -  create: new tag
  * PUT - update a tag by its `id` value
  * DELETE - delete a tag by its `id` value

## Sequelize Models 
* Product
* Category
  * Name
  * id
* Tag
* ProductTag

## Screenshot
![Screenshot: Insomnia](screenshot.png)
