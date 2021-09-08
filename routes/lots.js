const { Router } = require('express');
const Lost = require('../models/Lots');

const router = Router();

router.get('/', async (req, res) => {
  const { status } = req.query;

  const result = await Lost.find({ status });

  res.send(result);
});

module.exports = router;

