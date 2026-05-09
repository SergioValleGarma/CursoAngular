import { signal } from "@angular/core";
import { IProduct } from "../interfaces/product";

export class ProductService {
  private $listProducts = signal<IProduct[]>([
    { id: 1, name: 'Samsung 65" 4K Smart TV', price: 599.99, stock: 2 },
    { id: 2, name: 'LG OLED 55" 4K TV', price: 799.99, stock: 2 },
    { id: 3, name: 'Sony 75" 4K Smart TV', price: 1099.99, stock: 2 },
    { id: 4, name: 'MacBook Pro 14" M3', price: 1599.00, stock: 2 },
    { id: 5, name: 'Dell XPS 13 Laptop', price: 999.99, stock: 2 },
    { id: 6, name: 'HP Pavilion 15.6" Laptop', price: 549.99, stock: 2 },
    { id: 7, name: 'Apple iPad Air 11"', price: 599.00, stock: 2 },
    { id: 8, name: 'Samsung Galaxy Tab S9', price: 749.99, stock: 2 },
    { id: 9, name: 'Microsoft Surface Laptop 5', price: 1299.00, stock: 2 },
    { id: 10, name: 'Sony WH-1000XM5 Headphones', price: 399.99, stock: 2 },
    { id: 11, name: 'Apple AirPods Pro', price: 249.00, stock: 2 },
    { id: 12, name: 'Bose QuietComfort 45', price: 379.00, stock: 2 },
    { id: 13, name: 'Samsung Galaxy Buds Pro', price: 229.99, stock: 2 },
    { id: 14, name: 'JBL Flip 6 Speaker', price: 129.99, stock: 2 },
    { id: 15, name: 'Harman Kardon Citation One Mini', price: 199.99, stock: 2 },
    { id: 16, name: 'iPhone 15 Pro Max', price: 1199.00, stock: 2 },
    { id: 17, name: 'Samsung Galaxy S24 Ultra', price: 1299.99, stock: 2 },
    { id: 18, name: 'Google Pixel 8 Pro', price: 999.00, stock: 2 },
    { id: 19, name: 'OnePlus 12', price: 799.99, stock: 2 },
    { id: 20, name: 'Motorola Edge 50 Pro', price: 699.99, stock: 2 },
    { id: 21, name: 'Dell U2723DE 27" Monitor', price: 349.99, stock: 2 },
    { id: 22, name: 'LG 27" 4K IPS Monitor', price: 299.99, stock: 2 },
    { id: 23, name: 'ASUS ProArt PA278QV Monitor', price: 449.99, stock: 2 },
    { id: 24, name: 'BenQ EW3880U 38" Monitor', price: 999.99, stock: 2 },
    { id: 25, name: 'Samsung Curved Gaming Monitor', price: 599.99, stock: 2 },
    { id: 26, name: 'Canon EOS R6 Camera', price: 2499.00, stock: 2 },
    { id: 27, name: 'Sony A7R V Camera', price: 3198.00, stock: 2 },
    { id: 28, name: 'GoPro Hero 12 Black', price: 499.99, stock: 2 },
    { id: 29, name: 'DJI Mavic 3 Drone', price: 1999.00, stock: 2 },
    { id: 30, name: 'Nikon Z9 Camera', price: 5496.95, stock: 2 },
    { id: 31, name: 'PlayStation 5 Console', price: 499.99, stock: 2 },
    { id: 32, name: 'Xbox Series X Console', price: 499.99, stock: 2 },
    { id: 33, name: 'Nintendo Switch OLED', price: 349.99, stock: 2 },
    { id: 34, name: 'Meta Quest 3', price: 499.00, stock: 2 },
    { id: 35, name: 'Apple Watch Series 9', price: 399.00, stock: 2 },
    { id: 36, name: 'Samsung Galaxy Watch 6', price: 299.99, stock: 2 },
    { id: 37, name: 'Garmin Fenix 7X', price: 599.99, stock: 2 },
    { id: 38, name: 'Fitbit Sense 2', price: 299.95, stock: 2 },
    { id: 39, name: 'GoPro Subscription 1 Year', price: 99.99, stock: 2 },
    { id: 40, name: 'WD 4TB External Hard Drive', price: 79.99, stock: 2 },
    { id: 41, name: 'Samsung 1TB SSD T7 Shield', price: 129.99, stock: 2 },
    { id: 42, name: 'Kingston Fury Beast 2TB SSD', price: 159.99, stock: 2 },
    { id: 43, name: 'Seagate Backup Plus 5TB', price: 99.99, stock: 2 },
    { id: 44, name: 'Logitech MX Master 3S Mouse', price: 99.99, stock: 2 },
    { id: 45, name: 'Corsair Dark Core RGB Pro Mouse', price: 79.99, stock: 2 },
    { id: 46, name: 'Keychron K2 Mechanical Keyboard', price: 89.99, stock: 2 },
    { id: 47, name: 'NZXT AER RGB Fans', price: 149.99, stock: 2 },
    { id: 48, name: 'Razer DeathAdder V3 Gaming Mouse', price: 69.99, stock: 2 },
    { id: 49, name: 'SteelSeries Arctis Nova Pro', price: 349.99, stock: 2 },
    { id: 50, name: 'NVIDIA GeForce RTX 4090', price: 1599.99, stock: 2 },
  ]);

  private reduceStock(productId: number) {
    const product = this.listProducts().find(p => p.id === productId);
    if (product && product.stock > 0) {
      product.stock -= 1;

      const products = this.listProducts();
      const index = products.findIndex(p => p.id === productId);
      if (index !== -1) {
        this.$listProducts.update(list => {
          const updatedList = [...list];
          updatedList[index] = { ...updatedList[index], stock: product.stock };
          return updatedList;
        });
      }
    }
  }

  public $itemsInCart = signal<(IProduct & { quantity: number })[]>([]);

  public listProducts = this.$listProducts.asReadonly();
  public itemsInCart = this.$itemsInCart.asReadonly();

  public addToCart(product: IProduct) {
    const existingProduct = this.itemsInCart().find(p => p.id === product.id);
    if (existingProduct) {
      this.$itemsInCart.update(cart =>
        cart.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
    } else {
      this.$itemsInCart.update(cart => [...cart, { ...product, quantity: 1 }]);
    }
    this.reduceStock(product.id);
  }  

  public removeFromCart(productId: number) {
    const existingProduct = this.itemsInCart().find(p => p.id === productId);
    if (existingProduct) {
      this.$itemsInCart.update(cart => cart.filter(item => item.id !== productId));
      const product = this.listProducts().find(p => p.id === productId);
      if (product) {
        product.stock += existingProduct.quantity;
        const products = this.listProducts();
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
          this.$listProducts.update(list => {
            const updatedList = [...list];
            updatedList[index] = { ...updatedList[index], stock: product.stock };
            return updatedList;
          });
        }
      }
    }
  }
}