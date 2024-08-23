const axios = require('axios');
require('dotenv').config();
const URL3 = process.env.URL3;

async function getStats() {
  try {
    const response = await axios.get(`${URL3}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from Platform C');
  }
}

module.exports = { getStats };