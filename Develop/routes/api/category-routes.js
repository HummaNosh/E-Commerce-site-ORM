const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // hnn
  try {
    const CategoryStuff = Category.findAll({
      include: [{Product}],
    });
    res.status(200).json(CategoryStuff);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // hnn
try {
  const CategoryStuff = Category.findByPk(req.params.id, {
    include: [{ model: Product}]
  });
  if (!CategoryStuff) {
    res.status(404).json({message: "No Category found with that ID"}) 
  return;
 }
 res.status(200).json(CategoryStuff);
} catch (err) {
  res.status(500).json(err);
}
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const CategoryStuff = Category.create({
      Category_name: req.body.Category_name,
    });
    res.status(200).json(CategoryStuff);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const CategoryStuff = Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!CategoryStuff) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(CategoryStuff);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
