const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/productRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const errorHandler = require('./api/middlewares/errorHandler');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/api', productRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
