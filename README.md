# LAB - 00 

## Proof of Life Server

### Author: Austin Hedeen

### Links and Resources
* [submission PR](https://github.com/austinhedeen-401-advanced-javascript/lab-00/pull/1)
* [travis](https://travis-ci.com/austinhedeen-401-advanced-javascript/lab-00)
* [front-end](https://austinhedeen-lab-00.herokuapp.com/)

#### Documentation
* [jsdoc](https://austinhedeen-lab-00.herokuapp.com/docs/) (Server assignments)

### Modules
#### `pol.js`
##### Exported Values and Methods

###### `isAlive(dead) -> boolean`
Returns true/false to indicate how the server works

### Setup
#### `.env` requirements
* `PORT` - Port Number

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns a boolean.
* Endpoint: `/docs/`
  * Returns JSDoc documentation pages.
  
#### Tests
* Unit Tests: `npm run test`
* Lint Tests: `npm run lint`

#### UML
![UML Diagram](whiteboard.jpg)
