require('dotenv').config();

const express = require('express');
const router = express.Router();

const platformAService = require('../../services/platformAService.js');
const platformBService = require('../../services/platformBService.js');
const platformCService = require('../../services/platformCService.js');
const cache = require('../../utils/cache.js');

const authenticate = require('../../middlewares/authenticate.js');
const rateLimiter = require('../../middlewares/RateLimiter.js');

const mergeUserData = require('../../utils/mergeUserData.js');

router.get('/social-stats',authenticate,rateLimiter , async (req, res) => {
  
  try {
    const cachedData = cache.get('socialStats');
    if (cachedData) {
      console.log(`Data available on cache `);
      return res.status(200).json(cachedData);
    }

    const [platformAData, platformBData, platformCData] = await Promise.all([
      platformAService.getStats(),
      platformBService.getStats(),
      platformCService.getStats(),
    ]);

    const mergedData = mergeUserData(platformAData, platformBData, platformCData);

    cache.set('socialStats', mergedData, 300); 
    res.status(200).json(mergedData);

  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch social stats', error: error.message });
  }
});

module.exports = router;
