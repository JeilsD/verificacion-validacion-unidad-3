# Unidad 3 — Carrito de compras con TDD

Proyecto académico de un carrito de compras implementado en JavaScript mediante desarrollo dirigido por pruebas (TDD). Se utiliza Vitest para ejecutar las pruebas unitarias y medir la cobertura.

## Requisitos implementados

- **RF-01:** agregar productos con identificador, nombre, precio y cantidad válida.
- **RF-02:** calcular el subtotal y el total del carrito.
- **RF-03:** aplicar descuentos entre 0 % y 100 %, sin producir totales negativos.
- **RF-04:** actualizar la cantidad de un producto y eliminar productos del carrito.
- **RF-05:** rechazar datos inválidos, como precios negativos, cantidades no positivas o descuentos fuera de rango, mediante errores claros.

## Organización

```text
.
├── .github/
│   └── workflows/
├── docs/
├── src/
│   └── modelos/
│       ├── carrito.js
│       └── producto.js
├── tests/
│   └── unit/
│       ├── carrito.test.js
│       └── producto.test.js
├── package.json
└── package-lock.json
```

`Producto` valida y representa los datos de cada artículo. `Carrito` administra los productos y realiza los cálculos del subtotal y del total. Las pruebas unitarias están separadas de las clases para facilitar su localización y mantenimiento.

## Requisitos previos

- Node.js 24 o compatible.
- npm, incluido con Node.js.

## Instalación y ejecución

Desde la carpeta raíz del proyecto, instala las dependencias y ejecuta las pruebas:

```bash
npm ci
npm test
```

Para ejecutar las pruebas y generar el resumen de cobertura:

```bash
npm run coverage
```

Las pruebas cubren casos normales, límites y entradas inválidas. La última ejecución local registrada obtuvo **23 pruebas aprobadas** y **100 %** en sentencias, ramas, funciones y líneas para `Carrito` y `Producto`. La cobertura describe qué partes del código se ejecutaron; por sí sola no demuestra que todos los requisitos estén correctos.

## Integración continua

El workflow de GitHub Actions está en `.github/workflows/ci.yml`. Se ejecuta en cambios enviados con `push` y en eventos `pull_request`, instala las dependencias mediante `npm ci` y ejecuta las pruebas y la cobertura.

## Alcance

El proyecto implementa las reglas indicadas para esta actividad. No define políticas comerciales adicionales para descuentos, monedas, impuestos u otras promociones.
## Documentación adicional

- [Matriz de requisitos y pruebas](docs/matriz-pruebas.md): trazabilidad de RF-01 a RF-05 con casos unitarios asociados.
