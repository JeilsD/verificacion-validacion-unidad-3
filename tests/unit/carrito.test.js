import { describe, expect, it } from 'vitest';
import { Carrito } from '../../src/modelos/carrito.js';

describe('Carrito de compras', () => {
  it('calcula el subtotal del precio por cantidad', () => {
    const carrito = new Carrito();
    carrito.agregarProducto({ id: 'P-01', nombre: 'Cuaderno', precio: 2.5, cantidad: 2 });
    expect(carrito.calcularSubtotal()).toBe(5);
  });

  it('calcula el total con descuento porcentual', () => {
    const carrito = new Carrito();
    carrito.agregarProducto({ id: 'P-01', nombre: 'Cuaderno', precio: 2.5, cantidad: 2 });
    expect(carrito.calcularTotal(10)).toBe(4.5);
  });

  it('acepta un descuento de cero por ciento', () => {
    const carrito = new Carrito();
    carrito.agregarProducto({ id: 'P-01', nombre: 'Cuaderno', precio: 2.5, cantidad: 2 });
    expect(carrito.calcularTotal(0)).toBe(5);
  });

  it('acepta un descuento de cien por ciento sin total negativo', () => {
    const carrito = new Carrito();
    carrito.agregarProducto({ id: 'P-01', nombre: 'Cuaderno', precio: 2.5, cantidad: 2 });
    expect(carrito.calcularTotal(100)).toBe(0);
  });

  it('rechaza un precio negativo', () => {
    const carrito = new Carrito();
    expect(() => carrito.agregarProducto({ id: 'P-02', nombre: 'Lápiz', precio: -1, cantidad: 1 }))
      .toThrow('El precio no puede ser negativo.');
  });

  it('rechaza cantidad cero', () => {
    const carrito = new Carrito();
    expect(() => carrito.agregarProducto({ id: 'P-02', nombre: 'Lápiz', precio: 1, cantidad: 0 }))
      .toThrow('La cantidad debe ser positiva.');
  });

  it('rechaza cantidad negativa', () => {
    const carrito = new Carrito();
    expect(() => carrito.agregarProducto({ id: 'P-02', nombre: 'Lápiz', precio: 1, cantidad: -1 }))
      .toThrow('La cantidad debe ser positiva.');
  });

  it('rechaza descuento menor que cero', () => {
    const carrito = new Carrito();
    expect(() => carrito.calcularTotal(-1)).toThrow('El descuento debe estar entre 0 y 100 %.');
  });

  it('rechaza descuento mayor que cien', () => {
    const carrito = new Carrito();
    expect(() => carrito.calcularTotal(101)).toThrow('El descuento debe estar entre 0 y 100 %.');
  });

  it('actualiza la cantidad y refleja el cambio en el subtotal', () => {
    const carrito = new Carrito();
    carrito.agregarProducto({ id: 'P-01', nombre: 'Cuaderno', precio: 2.5, cantidad: 2 });
    carrito.actualizarCantidad('P-01', 4);
    expect(carrito.calcularSubtotal()).toBe(10);
  });

  it('elimina un producto y lo excluye del subtotal', () => {
    const carrito = new Carrito();
    carrito.agregarProducto({ id: 'P-01', nombre: 'Cuaderno', precio: 2.5, cantidad: 2 });
    carrito.agregarProducto({ id: 'P-02', nombre: 'Lápiz', precio: 1, cantidad: 3 });
    carrito.eliminarProducto('P-01');
    expect(carrito.calcularSubtotal()).toBe(3);
  });
});


describe('Manejo de IDs inexistentes', () => {
  it('rechaza actualizar un producto que no está en el carrito', () => {
    const carrito = new Carrito();
    expect(() => carrito.actualizarCantidad('P-99', 2))
      .toThrow('No existe un producto con ese ID.');
  });

  it('devuelve false cuando intenta eliminar un producto inexistente', () => {
    const carrito = new Carrito();
    expect(carrito.eliminarProducto('P-99')).toBe(false);
  });
});
