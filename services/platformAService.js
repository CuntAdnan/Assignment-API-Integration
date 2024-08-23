const axios = require('axios');
require('dotenv').config();
const URL1 = process.env.URL1;

async function getStats() {
  try {
    const response = await axios.get(`${URL1}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from Platform A');
  }
}

module.exports = { getStats };
