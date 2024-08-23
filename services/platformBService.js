const axios = require('axios');
require('dotenv').config();
const URL2 = process.env.URL2;

async function getStats() {
  try {
    const response = await axios.get(`${URL2}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from Platform B');
  }
}

module.exports = { getStats };
