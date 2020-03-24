/// depends

router.get('/add/:userId', (req, res) => {
  User.findByIdAndUpdate(req.session.currentUser._id, {
    $push: { friends: req.params.userId },
  });
});
