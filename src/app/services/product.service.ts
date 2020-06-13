import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Model
import { Product } from '../models/product';

@Injectable()
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase: AngularFireDatabase) { }

  getProducts()
  {
    return this.productList = this.firebase.list('products');
  }

  insertProduct(product: Product)
  {
    this.productList.push({
      NOMBRE: product.NOMBRE,
      APELLIDOS: product.APELLIDOS,
      NOCONTROL: product.NOCONTROL,
      CLAVE_MATERIA: product.CLAVE_MATERIA,
      CALIFICACION:product.CALIFICACION
    });
  }

  updateProduct(product: Product)
  {
    this.productList.update(product.$key, {
      NOMBRE: product.NOMBRE,
      APELLIDOS: product.APELLIDOS,
      NOCONTROL: product.NOCONTROL,
      CLAVE_MATERIA: product.CLAVE_MATERIA,
      CALIFICACION:product.CALIFICACION
    });
  }

  deleteProduct($key: string)
  {
    this.productList.remove($key);
  }
}
