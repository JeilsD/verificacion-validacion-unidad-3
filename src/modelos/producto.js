
function validarPrecio(precio) {
  if (typeof precio !== 'number' || !Number.isFinite(precio)) {
    throw new TypeError('El precio debe ser un número finito.');
  }
  if (precio < 0) {
    throw new RangeError('El precio no puede ser negativo.');
  }
}

function validarCantidad(cantidad) {
  if (typeof cantidad !== 'number' || !Number.isFinite(cantidad)) {
    throw new TypeError('La cantidad debe ser un número finito.');
  }
  if (cantidad <= 0) {
    throw new RangeError('La cantidad debe ser positiva.');
  }
}

export class Producto {
  constructor(producto) {
    if (!producto || typeof producto !== 'object') {
      throw new TypeError('El producto debe ser un objeto válido.');
    }

    const { id, nombre, precio, cantidad } = producto;
    if (typeof id !== 'string' || id.trim() === '') {
      throw new TypeError('El ID del producto es obligatorio.');
    }
    if (typeof nombre !== 'string' || nombre.trim() === '') {
      throw new TypeError('El nombre del producto es obligatorio.');
    }

    validarPrecio(precio);
    validarCantidad(cantidad);

    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  actualizarCantidad(cantidad) {
    validarCantidad(cantidad);
    this.cantidad = cantidad;
  }
}
