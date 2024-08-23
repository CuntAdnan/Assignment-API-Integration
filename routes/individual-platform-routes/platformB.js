const express = require('express');
const router = express.Router();
const platformBService = require('../../services/platformBService');

const authenticate = require('../../middlewares/authenticate.js');
const rateLimiter  = require('../../middlewares/RateLimiter.js');

router.get('/platformB',authenticate,rateLimiter, async (req, res) => {
  try {
    const platformBData = await platformBService.getStats();
    res.json(platformBData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
