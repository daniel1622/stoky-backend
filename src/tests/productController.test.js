const request = require('supertest');
const express = require('express');
const productRoutes = require('../api/routes/productRoutes');

const app = express();
app.use('/api', productRoutes);

describe('Product Controller', () => {
  it('Debe obtener todos los productos', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
  });

  it('Debe obtener un producto por ID', async () => {
    const res = await request(app).get('/api/products/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', 1);
  });

  it('Debe devolver 404 si el producto no existe', async () => {
    const res = await request(app).get('/api/products/999');
    expect(res.statusCode).toEqual(404);
  });
});
