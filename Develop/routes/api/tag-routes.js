const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // hn
  // find all tags
  // be sure to include its associated Product data
  try {
    const TagStuff = await Tag.findAll({
      include: [{ model: Reader }],
    });
    res.status(200).json(TagStuff);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // hn
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
  const TagStuff =  Tag.findByPk(req.params.id);
  if(!TagStuff) {
    res.status(404).json({message: 'No Tag is linked to this id!'});
    return;
}
res.status(200).json(TagStuff);
} catch (err) {
  res.status(500).json(err);
};
});

router.post('/', (req, res) => {
  // create a new tag
  // hn
  try{
    const TagStuff =  Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(TagStuff);
  } catch (err){
    res.status(400).json(err)
  }
  });

  // TO DOO THIS HAVENT COVERED UPDATE yet
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const TagStuff =  Tag.destroy({
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
