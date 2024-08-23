const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300, checkperiod: 600 }); 

const get = (key) => {
  const cachedData = cache.get(key);
  if (cachedData === undefined) {
    console.log(`Cache miss for key: ${key}`);
    return null; // Cache expired or not found
  }
  console.log(`Cache hit for key: ${key}`);
  return cachedData;
};


const set = (key, value, ttl) => {
  cache.set(key, value, ttl); // TTL in seconds
  console.log(`Data cached for key: ${key} with TTL of ${ttl} seconds`);
};

module.exports = { get, set };