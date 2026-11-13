# Matriz de requisitos y pruebas

Esta matriz relaciona los requisitos funcionales del proyecto con pruebas unitarias verificables. Los nombres corresponden a casos implementados en `tests/unit/`.

| Requisito | Criterio verificable | Casos de prueba relacionados | Evidencia |
|---|---|---|---|
| RF-01 — Agregar productos | Acepta un producto con identificador, nombre, precio y cantidad válidos. | Producto válido; calcula el subtotal del precio por cantidad. | `tests/unit/producto.test.js`, `tests/unit/carrito.test.js` |
| RF-02 — Calcular importes | Calcula subtotal y total aplicando el porcentaje de descuento indicado. | Calcula el subtotal del precio por cantidad; calcula el total con descuento porcentual. | `tests/unit/carrito.test.js` |
| RF-03 — Aplicar descuentos | Acepta descuentos entre 0 % y 100 % inclusive y calcula un total no negativo. | Acepta un descuento de cero por ciento; acepta un descuento de cien por ciento sin total negativo. | `tests/unit/carrito.test.js` |
| RF-04 — Mantener el carrito | Actualiza la cantidad de un producto y elimina productos; el subtotal refleja los cambios. | Actualiza la cantidad y refleja el cambio en el subtotal; elimina un producto y lo excluye del subtotal. | `tests/unit/carrito.test.js` |
| RF-05 — Validar entradas | Rechaza datos inválidos con errores claros y controla IDs inexistentes. | Rechazo de precio negativo, cantidad no positiva y descuentos fuera de rango; validaciones de `Producto`; actualizar ID inexistente y eliminar ID inexistente. | `tests/unit/carrito.test.js`, `tests/unit/producto.test.js` |

## Resultado de la ejecución

La última ejecución local registrada reportó 23 pruebas aprobadas en dos archivos. La medición de cobertura mostró 100 % en sentencias, ramas, funciones y líneas para `Carrito` y `Producto`. Estos resultados respaldan la ejecución de los casos automatizados; no sustituyen una revisión de los criterios de negocio ni prueban comportamientos no especificados.
