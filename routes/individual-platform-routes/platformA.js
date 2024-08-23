const express = require('express');
const router = express.Router();
const platformAService = require('../../services/platformAService');

const authenticate = require('../../middlewares/authenticate.js');
const rateLimiter  = require('../../middlewares/RateLimiter.js');

router.get('/platformA', authenticate,rateLimiter, async (req, res) => {
  try {
    const platformAData = await platformAService.getStats();
    res.json(platformAData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
