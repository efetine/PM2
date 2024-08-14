const CarritoCompra = require("../src/index");

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test("que si agregas un producto al carrito deberia contenerlo", () => {
    const producto = { nombre: "Lapicera", precio: 20 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito).toContain(producto);
  });

  test("debería inicializar el carrito vacío", () => {
    expect(carrito.carrito).toEqual([]);
  });

  test("que si agrego mas de un producto el total deberia ser la combinacion de la suma del precio de ambos", () => {
    carrito.agregarProducto({ nombre: "Lapicera", precio: 20 });
    carrito.agregarProducto({ nombre: "Marcador", precio: 30 });
    expect(carrito.calcularTotal()).toBe(50);
  });

  test("que si el carrito esta vacio el total deberia ser 0", () => {
    expect(carrito.calcularTotal()).toBe(0);
  });

  test("que si agrego un producto el descuento se aplica correctamente", () => {
    carrito.agregarProducto({ nombre: "Lapicera", precio: 100 });
    expect(carrito.aplicarDescuento(10)).toBe(90);
  });

  test("que si aplico el descuento en un carrito vacio el descuento deberia ser 0", () => {
    expect(carrito.aplicarDescuento(10)).toBe(0);
  });
});
