const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // hn
  // find all tags
  // be sure to include its associated Product data
  try {
    const TagStuff = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(TagStuff);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // hn
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
  const TagStuff = await Tag.findByPk(req.params.id, {
    include: [{model: Product}]
  });
  if(!TagStuff) {
    res.status(404).json({message: 'No Tag is linked to this id!'});
    return;
}
res.status(200).json(TagStuff);
} catch (err) {
  res.status(500).json(err);
};
});

router.post('/', async (req, res) => {
  // create a new tag
  // hn
  try{
    const TagStuff = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(TagStuff);
  } catch (err){
    res.status(400).json(err)
  }
  });


router.put('/:id', async (req, res) => {

  try {
    const TagStuff = await Tag.findByPk(req.params.id);

    if (!TagStuff) {
      res.status(404).json({ message: 'No Tags found with that id!' });
    }

  await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  } catch (err) {
    return res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const TagStuff =  await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!TagStuff) {
      res.status(404).json({ message: 'No Tags found with that id!' });
      return;
    }

    res.status(200).json(TagStuff);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
