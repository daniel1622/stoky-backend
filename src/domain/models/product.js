class Product {
  constructor({
    id,
    title,
    description,
    rating,
    image,
    quantity,
    colors,
    specifications,
    inventory,
    price,
    suggestedPrice,
    unitCost,
    marginPerUnit,
    marginPercentage,
    material,
    packingQuantity,
    origin,
    scalable,
    category,
    weight,
    dimensions,
    thumbnails
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.rating = rating;
    this.image = image;
    this.quantity = quantity;
    this.colors = colors;
    this.specifications = specifications;
    this.inventory = inventory;
    this.price = price;
    this.suggestedPrice = suggestedPrice;
    this.unitCost = unitCost;
    this.marginPerUnit = marginPerUnit;
    this.marginPercentage = marginPercentage;
    this.material = material;
    this.packingQuantity = packingQuantity;
    this.origin = origin;
    this.scalable = scalable;
    this.category = category;
    this.weight = weight;
    this.dimensions = dimensions;
    this.thumbnails = thumbnails;
  }
}

module.exports = Product;
