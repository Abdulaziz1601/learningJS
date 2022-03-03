const express = require('express');

require('dotenv').config(); // reads .env on RUNTIME

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World !');
});

app.listen(process.env.PORT, () => { // Using PORT from .env file which is not pushed to ghub
    // eslint-disable-next-line no-console
    console.log('APp is running at PORT 3000');
});
