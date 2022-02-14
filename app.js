const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const swagger = require("./swagger.json")

const errorHandler = require('./middleware/error-handler');
const buildings = require('./api/buildings/controller')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// global error handler
app.use(errorHandler);

// swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger))

// api routes
app.use('/',buildings);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;

app.listen(port, () => {
    console.log(`APP LISTENING ON ADDRESS: http://127.0.0.1:${port}`)
})