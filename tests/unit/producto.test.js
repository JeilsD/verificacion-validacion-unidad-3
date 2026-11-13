
import { describe, expect, it } from 'vitest';
import { Producto } from '../../src/modelos/producto.js';

describe('Producto', () => {
  const datosValidos = { id: 'P-01', nombre: 'Cuaderno', precio: 2.5, cantidad: 2 };

  it('conserva los datos válidos del producto', () => {
    const producto = new Producto(datosValidos);
    expect(producto).toMatchObject(datosValidos);
  });

  it('rechaza un producto nulo', () => {
    expect(() => new Producto(null)).toThrow('El producto debe ser un objeto válido.');
  });

  it('rechaza un ID vacío', () => {
    expect(() => new Producto({ ...datosValidos, id: ' ' }))
      .toThrow('El ID del producto es obligatorio.');
  });

  it('rechaza un nombre vacío', () => {
    expect(() => new Producto({ ...datosValidos, nombre: '' }))
      .toThrow('El nombre del producto es obligatorio.');
  });

  it('rechaza un precio que no sea finito', () => {
    expect(() => new Producto({ ...datosValidos, precio: Infinity }))
      .toThrow('El precio debe ser un número finito.');
  });

  it('rechaza un precio negativo', () => {
    expect(() => new Producto({ ...datosValidos, precio: -0.01 }))
      .toThrow('El precio no puede ser negativo.');
  });

  it('rechaza una cantidad que no sea finita', () => {
    expect(() => new Producto({ ...datosValidos, cantidad: NaN }))
      .toThrow('La cantidad debe ser un número finito.');
  });

  it('rechaza una cantidad cero', () => {
    expect(() => new Producto({ ...datosValidos, cantidad: 0 }))
      .toThrow('La cantidad debe ser positiva.');
  });

  it('actualiza una cantidad válida', () => {
    const producto = new Producto(datosValidos);
    producto.actualizarCantidad(4);
    expect(producto.cantidad).toBe(4);
  });

  it('conserva la cantidad si se intenta actualizar con un valor inválido', () => {
    const producto = new Producto(datosValidos);
    expect(() => producto.actualizarCantidad(-1)).toThrow('La cantidad debe ser positiva.');
    expect(producto.cantidad).toBe(2);
  });
});
