export type Category =
  | "autos"
  | "motos"
  | "peluches"
  | "juguetes"
  | "perfumes"
  | "tazas"
  | "decoracion"
  | "accesorios"
  | "audio";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
}

export const categoryLabels: Record<Category, string> = {
  autos: "Autos a Escala",
  motos: "Motos",
  peluches: "Peluches",
  juguetes: "Juguetes y Figuras",
  perfumes: "Perfumes",
  tazas: "Tazas y Termos",
  decoracion: "Decoracion",
  accesorios: "Accesorios",
  audio: "Audio",
};

export const products: Product[] = [
  // Autos a Escala
  { id: "jada-132", name: "Jada 1:32", price: 300, category: "autos" },
  { id: "jada-124", name: "Jada 1:24", price: 750, category: "autos" },
  { id: "camioneta-124", name: "Camioneta Escala 1:24", price: 750, category: "autos" },
  { id: "camioneta-lowrider", name: "Camioneta Low Rider", price: 800, category: "autos" },
  { id: "vochitos", name: "Vochitos", price: 120, category: "autos" },
  { id: "lambo", name: "Lambo", price: 400, category: "autos" },
  { id: "tesla-truck", name: "Tesla Truck", price: 600, category: "autos" },
  { id: "carros-control", name: "Carros de Control", price: 350, category: "autos" },

  // Motos
  { id: "moto-grande", name: "Moto de Metal Grande", price: 400, category: "motos" },
  { id: "moto-chica", name: "Moto de Metal Chica", price: 300, category: "motos" },
  { id: "kawa-h2r", name: "Kawasaki H2R", price: 300, category: "motos" },
  { id: "ktm", name: "KTM", price: 200, category: "motos" },
  { id: "suzuki", name: "Suzuki", price: 200, category: "motos" },

  // Peluches
  { id: "garfield", name: "Garfield", price: 180, category: "peluches" },
  { id: "stitch", name: "Stitch", price: 250, category: "peluches" },
  { id: "bob-esponja", name: "Bob Esponja", price: 500, category: "peluches" },
  { id: "oso-peluche", name: "Oso Peluche", price: 300, category: "peluches" },

  // Juguetes y Figuras
  { id: "lego-steve", name: "Lego Steve", price: 600, category: "juguetes" },
  { id: "bloques-magneticos", name: "Bloques Magneticos", price: 200, category: "juguetes" },
  { id: "bloques-mag-caja", name: "Bloques Magneticos de Caja", price: 300, category: "juguetes" },
  { id: "naruto", name: "Naruto", price: 200, category: "juguetes" },
  { id: "kakashi", name: "Kakashi", price: 200, category: "juguetes" },
  { id: "playmobil-combi", name: "Playmobil Combi", price: 550, category: "juguetes" },

  // Perfumes
  { id: "valentino", name: "Valentino", price: 850, category: "perfumes" },
  { id: "mandarin", name: "Mandarin", price: 950, category: "perfumes" },
  { id: "fakhar", name: "Fakhar", price: 850, category: "perfumes" },
  { id: "amara", name: "Amara", price: 850, category: "perfumes" },
  { id: "hugo-boss-xy", name: "Hugo Boss XY", price: 950, category: "perfumes" },
  { id: "yara", name: "Yara", price: 750, category: "perfumes" },
  { id: "yara-moi", name: "Yara Moi", price: 750, category: "perfumes" },
  { id: "hugo-boss-extreme", name: "Hugo Boss Extreme", price: 800, category: "perfumes" },

  // Tazas y Termos
  { id: "taza-turbo", name: "Taza de Turbo", price: 250, category: "tazas" },
  { id: "taza-motor", name: "Taza de Motor", price: 250, category: "tazas" },
  { id: "taza-dedo", name: "Taza Dedo Senal", price: 150, category: "tazas" },
  { id: "taza-cristal", name: "Taza Cristal", price: 150, category: "tazas" },
  { id: "taza-minecraft", name: "Taza Minecraft", price: 250, category: "tazas" },
  { id: "deadpool", name: "Deadpool", price: 250, category: "tazas" },
  { id: "termos", name: "Termos", price: 180, category: "tazas" },

  // Decoracion
  { id: "cuadros", name: "Cuadros", price: 260, category: "decoracion" },
  { id: "alcancia-puercos", name: "Alcancia Puerquito", price: 220, category: "decoracion" },
  { id: "alcancia-combi", name: "Alcancia Combi", price: 200, category: "decoracion" },

  // Accesorios
  { id: "gorras-mrcash", name: "Gorras Mr. Cash", price: 650, category: "accesorios" },
  { id: "mochila-gorras", name: "Mochila de Gorras", price: 650, category: "accesorios" },
  { id: "lentes", name: "Lentes", price: 400, category: "accesorios" },
  { id: "sillas-plegables", name: "Sillas Plegables", price: 300, category: "accesorios" },

  // Audio
  { id: "bocinas", name: "Bocinas", price: 550, category: "audio" },
  { id: "bocina-combi", name: "Bocina Combi", price: 600, category: "audio" },
];
