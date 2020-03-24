const router = require('express').Router();
const { Blog, User } = require('../models');

//POST one item
// router.put("/blogs/:id", (req, res) => {
//   Blog.findByIdAndUpdate(req.params.id, req.body).then(() =>
//     res.sendStatus(200).catch((e) => console.error(e))
//   );
// });

router.post('/blogs', (req, res) =>
  Blog.create(req.body)
    .then(({ _id }) => {
      User.findByIdAndUpdate(req.body.owner, {
        $push: { blogs: _id }
      }).then(() => res.sendStatus(200));
    })
    .catch(e => console.error(e))
);

//DELETE one item
// router.delete("/blogs/:id", (req, res) => {
//   Blog.findByIdAndDelete(req.params.id)
//     .then(() => res.sendStatus(200))
//     .catch((e) => console.error(e));
// });
router.delete('/blogs/:id', (req, res) =>
  Blog.findByIdAndDelete(req.params.id)
    .then(({ _id, owner }) => {
      User.findByIdAndUpdate(owner, { $pull: { blogs: _id } }).then(() =>
        res.sendStatus(200)
      );
    })
    .catch(e => console.error(e))
);

//PUT
router.put('/blogs/:id', (req, res) =>
  Blog.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
);

module.exports = router;
