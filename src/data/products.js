import cafeMolidoIntenso from '../assets/images/cafe_molido_intenso.jpg';
import cafeGranoPremium from '../assets/images/cafe_grano_premium.jpg';
import cafeOrganico from '../assets/images/cafe_organico.jpg';
import cafeDescafeinado from '../assets/images/cafe_descafeinado.jpg';
import cafeEspecialidad from '../assets/images/cafe_especialidad.jpg';
import cafeInstantaneo from '../assets/images/cafe_instantaneo.jpg';
import cafeTurco from '../assets/images/cafe_turco.jpg';
import capsulasEspresso from '../assets/images/capsulas_espresso.jpg';
import coldBrew from '../assets/images/cold_brew.jpg';
import kitCata from '../assets/images/kit_cata.jpg';

export const productos = [
    { id: 1, nombre: "Café en Grano Premium", descripcion: "Granos de café 100% arábica, tostado medio.", precio: 4500, stock: 25, categoria: "Granos", imagen: cafeGranoPremium },
    { id: 2, nombre: "Café Molido Intenso", descripcion: "Café molido con un tostado oscuro para un sabor fuerte.", precio: 4000, stock: 30, categoria: "Molido", imagen: cafeMolidoIntenso },
    { id: 3, nombre: "Cápsulas de Café Espresso", descripcion: "Pack de 10 cápsulas compatibles con Nespresso.", precio: 5500, stock: 50, categoria: "Capsulas", imagen: capsulasEspresso },
    { id: 4, nombre: "Café Orgánico en Grano", descripcion: "Café orgánico certificado, cultivado sin pesticidas.", precio: 5000, stock: 20, categoria: "Granos", imagen: cafeOrganico },
    { id: 5, nombre: "Café Descafeinado", descripcion: "Café sin cafeína pero con todo el sabor.", precio: 4200, stock: 18, categoria: "Molido", imagen: cafeDescafeinado },
    { id: 6, nombre: "Café de Especialidad", descripcion: "Granos seleccionados de origen único.", precio: 6000, stock: 15, categoria: "Granos", imagen: cafeEspecialidad },
    { id: 7, nombre: "Cold Brew Concentrado", descripcion: "Café especial para preparar cold brew en casa.", precio: 4800, stock: 22, categoria: "Cold brew", imagen: coldBrew },
    { id: 8, nombre: "Kit de Cata de Café", descripcion: "Diferentes variedades de café en un solo pack.", precio: 7500, stock: 10, categoria: "Kits", imagen: kitCata },
    { id: 9, nombre: "Café Instantáneo Gourmet", descripcion: "Café soluble de alta calidad, rápido y delicioso.", precio: 3500, stock: 40, categoria: "Instantaneo", imagen: cafeInstantaneo },
    { id: 10, nombre: "Café Turco Tradicional", descripcion: "Café molido fino ideal para la preparación turca.", precio: 4700, stock: 12, categoria: "Molido", imagen: cafeTurco }
];