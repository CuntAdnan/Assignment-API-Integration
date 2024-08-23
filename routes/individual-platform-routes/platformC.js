const express = require('express');
const router = express.Router();
const platformCService = require('../../services/platformCService');

const authenticate = require('../../middlewares/authenticate.js');
const rateLimiter  = require('../../middlewares/RateLimiter.js');

router.get('/platformC',authenticate,rateLimiter, async (req, res) => {
  try {
    const platformCData = await platformCService.getStats();
    res.json(platformCData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
