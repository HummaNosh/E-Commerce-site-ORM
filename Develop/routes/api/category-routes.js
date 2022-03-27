const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // hnn
  try {
    const CategoryStuff = await Category.findAll({
      include: [{model: Product}],
    });
    if (!CategoryStuff) {
      return res.status(404).json({message: "No Category found with that ID"}) 
   }
    res.status(200).json(CategoryStuff);
  } catch (err) {
    res.status(500).json(err);
  }

  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // hnn
try {
  const CategoryStuff = await Category.findByPk(req.params.id, {
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

router.post('/', async (req, res) => {
  // create a new category
  try {
    const CategoryStuff = await Category.create({
      Category_name: req.body.Category_name,
    });
    res.status(200).json(CategoryStuff);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {

  try {
  // update a category by its `id` value
  const CategoryStuff = await Category.findByPk(req.params.id); 

  if(!CategoryStuff) {
    res.status(404).json({message: "No Category found with this ID"});
  }
await Category.update(req.body, {
  where: {
    id: req.params.id,
  },
})

  } catch(err) {
    res.status(400).json({err: "Can not update category"});
  }
});
   
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const CategoryStuff = await Category.destroy({
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
