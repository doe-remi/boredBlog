const router = require('express').Router();
const { Blog } = require('../models');

//Post one item
router.post('/blogs', (req, res) => {
  Blog.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e));
});


//PUT one item
router.put("/blogs/:id", (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(200).catch((e) => console.error(e))
  );
});

//DELETE one item
router.delete("/blogs/:id", (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch((e) => console.error(e));
});

module.exports = router;