const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // hn
  // find all tags
  // be sure to include its associated Product data
  const TagData = await Tag.findAll().catch((err) => { 
    res.json(err);
  });
  const Tags = dishData.map((Tag) => Tag.get({ plain: true }));
  res.render('all', { Tags });
  });

router.get('/:id', (req, res) => {
  // hn
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
  const dishData = await Tag.findByPk(req.params.id);
  if(!dishData) {
    res.status(404).json({message: 'No Tag is linked to this id!'});
    return;
}
const dish = dishData.get({ plain: true });
res.render('dish', dish);
} catch (err) {
  res.status(500).json(err);
};
});

router.post('/', (req, res) => {
  // create a new tag
  // hn
  try{
    const TagData = await Tag.create(req.body)
    res.status(200).json(TagData);
  } catch (err){
    res.status(400).json(err)
  }
  });

  // TO DOO THIS HAVENT COVERED UPDATE OR DELETE YET
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value

});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
