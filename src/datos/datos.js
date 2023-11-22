const categorias = [
  {
    id: 1,
    nombre: "fruta",
  },
  {
    id: 2,
    nombre: "verdura",
  },
];

const productos = [
  {
    id: 1,
    categoria_id: 1,
    nombre: "manzana",
    precio: 100,
  },
  {
    id: 2,
    categoria_id: 1,
    nombre: "sandia",
    precio: 1000,
  },
  {
    id: 3,
    categoria_id: 2,
    nombre: "aguacate",
    precio: 10,
  },
  {
    id: 4,
    categoria_id: 2,
    nombre: "zanahoria",
    precio: 56,
  },
];

const paises = [
  {
    id: 1,
    nombre: "chile",
    dominio: "cl",
  },
  {
    id: 2,
    nombre: "mexico",
    dominio: "mx",
  },
  {
    id: 3,
    nombre: "Bolivia",
    dominio: "bo",
  },
  {
    id: 4,
    nombre: "argentina",
    dominio: "ar",
  },
  {
    id: 5,
    nombre: "colombia",
    dominio: "co",
  },
];

const categorias_prodcutos = [
  {
    id: 1,
    nombre: "Abarrotes",
  },
  {
    id: 2,
    nombre: "Lacteos",
  },
  {
    id: 3,
    nombre: "carnes",
  },
  {
    id: 4,
    nombre: "Licores",
  },
  {
    id: 5,
    nombre: "Perfumeria",
  },
];

const atributos = [
  {
    id: 1,
    nombre: "Perecible",
  },
  {
    id: 2,
    nombre: "Armable",
  },
  {
    id: 3,
    nombre: "Fragil",
  },
  {
    id: 4,
    nombre: "Multiusos",
  },
  {
    id: 5,
    nombre: "edicion limitada",
  },
];
export { productos };
export { categorias };
export { paises };
export { categorias_prodcutos };
export { atributos };
