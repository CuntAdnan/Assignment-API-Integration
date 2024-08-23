require('dotenv').config();
const express = require('express');
const socialStatsRoute = require('./routes/inteegrated_routes/socialStats');
const app = express();

const platformARoute = require('./routes/individual-platform-routes/platformA');
const platformBRoute = require('./routes/individual-platform-routes/platformB');
const platformCRoute = require('./routes/individual-platform-routes/platformC');

app.use(express.json());
app.use('/api', socialStatsRoute);
app.use('/platform', platformARoute);
app.use('/platform', platformBRoute);
app.use('/platform', platformCRoute);


app.listen(process.env.PORT, () => {    
    console.log(`Server running on port ${process.env.PORT}`);
});
