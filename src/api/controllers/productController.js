// src/api/controllers/productController.js

const ProductRepository = require('../../infrastructure/repository/productRepository');
const productRepository = new ProductRepository();

class ProductController {
  static getAllProducts(req, res) {
    try {
      const products = productRepository.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener productos.' });
    }
  }

  static getProductById(req, res) {
    try {
      const product = productRepository.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener producto.' });
    }
  }
}

module.exports = ProductController;
