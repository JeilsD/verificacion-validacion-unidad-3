import { Producto } from './producto.js';

export class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(datosProducto) {
    const producto = new Producto(datosProducto);
    this.productos.push(producto);
  }

  actualizarCantidad(idProducto, nuevaCantidad) {
    const producto = this.productos.find((elemento) => elemento.id === idProducto);
    if (!producto) {
      throw new Error('No existe un producto con ese ID.');
    }

    producto.actualizarCantidad(nuevaCantidad);
  }

  eliminarProducto(idProducto) {
    const indice = this.productos.findIndex((producto) => producto.id === idProducto);
    if (indice === -1) {
      return false;
    }

    this.productos.splice(indice, 1);
    return true;
  }

  calcularSubtotal() {
    return this.productos.reduce(
      (subtotal, producto) => subtotal + producto.precio * producto.cantidad,
      0,
    );
  }

  calcularTotal(descuentoPorcentaje = 0) {
    if (
      typeof descuentoPorcentaje !== 'number' ||
      !Number.isFinite(descuentoPorcentaje) ||
      descuentoPorcentaje < 0 ||
      descuentoPorcentaje > 100
    ) {
      throw new RangeError('El descuento debe estar entre 0 y 100 %.');
    }

    return this.calcularSubtotal() * (1 - descuentoPorcentaje / 100);
  }
}
