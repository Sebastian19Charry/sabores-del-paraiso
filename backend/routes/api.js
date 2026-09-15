const express = require('express');
const router = express.Router();

// Datos del proyecto (Sabores del paraíso)
const data = {
  hero: {
    title: "Sabores del Paraíso",
    subtitle: "Postres, arequipes y salsas artesanales a base de maracuyá",
    description: "Una experiencia exótica y nutritiva que resalta los sabores de Pulí."
  },
  historia: {
    title: "Nuestra Historia",
    paragraphs: [
      "El proyecto nació a partir del deseo de rescatar y resaltar el sabor único del maracuyá, una fruta tropical muy apreciada por su aroma, acidez y propiedades nutricionales. Inspirados por las tradiciones gastronómicas del municipio, nosotros como grupo de estudiantes decidimos explorar nuevas formas de incorporar el maracuyá en postres, arequipes y salsas que fueran innovadoras, saludables y atractivas para todo tipo de público.",
      "Durante las primeras etapas del proyecto, realizamos investigaciones sobre el origen del maracuyá, sus beneficios para la salud y su facilidad en la cocina. Con el tiempo, fuimos desarrollando recetas como postres, arequipe y salsas todas realizadas con el maracuyá como ingrediente estrella.",
      "Gracias al trabajo en equipo, la creatividad y el compromiso con el uso de productos naturales, el proyecto ha logrado no solo crear postres deliciosos, sino también fomentar el interés hacia el maracuyá y la economía municipal."
    ]
  },
  filosofia: {
    mision: "Nuestra misión es desarrollar y promover una línea de postres, arequipes y salsas artesanales e innovadoras elaboradas a base de maracuyá, resaltando sus propiedades nutritivas, su sabor exótico y su versatilidad culinaria. Buscamos satisfacer los diferentes gustos del municipio y alrededores, fomentar el consumo de frutas tropicales y contribuir al desarrollo de productos artesanales y sostenibles que enriquezcan la economía del municipio.",
    vision: "Para el año 2030 Sabores del paraíso será reconocida como una empresa artesanal dedicada a la creación de postres, arequipes y salsas innovadoras a base de maracuyá que combinan calidad, sabor y creatividad, y promueven el valor de los productos naturales tanto a nivel municipal como departamental.",
    valores: [
      { title: "Responsabilidad", description: "Cumplimos con nuestros procesos y compromisos de manera organizada." },
      { title: "Compromiso", description: "Damos lo mejor de nosotros en cada producto que elaboramos." },
      { title: "Honestidad", description: "Actuamos con transparencia en todas nuestras actividades." },
      { title: "Trabajo en equipo", description: "Crecemos juntos apoyándonos y valorando las ideas de todos." },
      { title: "Creatividad", description: "Buscamos innovar constantemente en nuestros productos." },
      { title: "Calidad", description: "Nos esforzamos por ofrecer siempre lo mejor a nuestros clientes." }
    ]
  },
  objetivos: {
    general: "Desarrollar una variedad de postres, arequipes y salsas a base de maracuyá que se destaquen por su sabor, presentación y aporte nutricional, aportando a la alimentación de los habitantes en el municipio de Pulí.",
    especificos: [
      "Investigar las propiedades del maracuyá y su aporte nutricional.",
      "Promover el consumo del maracuyá mediante degustaciones, campañas en redes sociales y ferias gastronómicas.",
      "Utilizar técnicas de preparación sostenibles y productos locales para apoyar la economía municipal.",
      "Evaluar la aceptación del producto mediante encuestas de satisfacción y pruebas de degustación."
    ],
    empresariales: [
      "Posicionar la marca Sabores del Paraíso en el mercado local de Pulí.",
      "Garantizar productos de alta calidad cumpliendo normas de higiene y producción.",
      "Aumentar progresivamente las ventas mediante estrategias atractivas.",
      "Innovar en nuevos productos derivados del maracuyá.",
      "Lograr que el emprendimiento sea sostenible y genere beneficios económicos."
    ]
  },
  productos: [
    {
      id: 1,
      name: "Postre de Maracuyá (95g)",
      presentacion: "95g",
      price: "$4.000",
      description: "Delicioso postre artesanal en porción individual, elaborado con capas suaves y pulpa 100% natural de maracuyá que equilibra la dulzura y la acidez perfecta.",
      caracteristicas: [
        "Presentación individual de 95 gramos",
        "Elaborado con fruta fresca cultivada en Pulí",
        "Equilibrio exacto entre textura cremosa y toque cítrico"
      ],
      badge: "Porción Personal",
      image: "/images/postres_maracuya_real.png"
    },
    {
      id: 2,
      name: "Postre de Maracuyá (125g)",
      presentacion: "125g",
      price: "$6.000",
      description: "Nuestra porción más generosa de postre de maracuyá, con mayor contenido de pulpa natural, ideal para disfrutar de una experiencia gourmet más completa.",
      caracteristicas: [
        "Presentación ampliada de 125 gramos",
        "Textura suave con glaseado y semillas naturales",
        "Rico en vitamina C y antioxidantes naturales"
      ],
      badge: "Porción Especial",
      image: "/images/postres_maracuya_real.png"
    },
    {
      id: 3,
      name: "Mermelada de Maracuyá",
      presentacion: "Frasco",
      price: "$15.000",
      description: "Exquisita mermelada y salsa dulce concentrada a fuego lento con el mejor maracuyá de la región. Perfecta para untar en panes, tostadas, galletas y repostería.",
      caracteristicas: [
        "Frasco de vidrio tradicional con sello de calidad",
        "Sin aditivos artificiales ni colorantes químicos",
        "Gran versatilidad para postres y desayunos"
      ],
      badge: "Frasco Familiar",
      image: "/images/arequipe_frasco_real.png"
    },
    {
      id: 4,
      name: "Arequipe con Maracuyá",
      presentacion: "Tradicional",
      price: "$6.000",
      description: "Una fusión irresistible entre la dulzura cremosa del tradicional arequipe y el aroma exótico del maracuyá, creando una combinación dulce y cítrica única.",
      caracteristicas: [
        "Receta artesanal exclusiva de Sabores del Paraíso",
        "Consistencia untable y textura aterciopelada",
        "Sabor equilibrado que no empalaga"
      ],
      badge: "Receta Exclusiva",
      image: "/images/salsas_maracuya_real.jpg"
    }
  ],
  ubicacion: {
    address: "Calle 8 #6-190",
    barrio: "Barrio Lagunitas",
    city: "Casco urbano de Pulí",
    country: "Cundinamarca, Colombia",
    horario: "Lunes a Domingo: 8:00 AM - 8:00 PM",
    telefono: "3239808476",
    whatsapp: "3239808476",
    email: "Saboresdelparaisopuli@gmail.com",
    coordinates: { lat: 4.6738, lng: -74.7088 } 
  },
  proceso: [
    {
      step: 1,
      title: "Selección de Frutos",
      description: "Escogemos cuidadosamente el mejor maracuyá de cultivos locales."
    },
    {
      step: 2,
      title: "Procesamiento Artesanal",
      description: "Elaboramos nuestros productos con técnicas tradicionales y sostenibles."
    },
    {
      step: 3,
      title: "Control de Calidad",
      description: "Garantizamos altos estándares de higiene y sabor en cada lote."
    },
    {
      step: 4,
      title: "Distribución",
      description: "Llevamos nuestros sabores directamente a las familias de Pulí."
    }
  ],
  integrantes: [
    {
      id: 1,
      name: "Geraldine Guerrero Bonilla",
      role: "Estudiante de Grado 11"
    },
    {
      id: 2,
      name: "Yojan Santiago Medina Ruiz",
      role: "Estudiante de Grado 11"
    },
    {
      id: 3,
      name: "Diego Osorio Sánchez",
      role: "Estudiante de Grado 11"
    }
  ]
};

// Rutas
router.get('/data', (req, res) => {
  res.json(data);
});

module.exports = router;
