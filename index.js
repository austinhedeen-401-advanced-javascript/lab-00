'use strict';

/**
 * Simple Server
 * @module index
 */

const express = require('express');
const pol = require('./pol.js');


const PORT = process.env.PORT || 3000;

const app = express();

app.use('/docs', express.static('./docs'));

app.get('/', requestHandler);

/**
 * Request Handler (All Routes)
 * @param request
 * @param response
 */
function requestHandler(request, response) {
  response.setHeader('Content-Type', 'text/html');
  response.statusCode = 200;
  const isItAlive = pol.isAlive(request.query.dead).toString();
  response.write(isItAlive);
  response.end();
}

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`) );
