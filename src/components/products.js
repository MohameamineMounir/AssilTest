import bstillaPoison from "../assets/pastilaPison.webp";
import pastillaAupoulet from "../assets/pastillaAupoulet.png";
// import LegumesEpluche from "../assets/mixlegume (1).jpg";
// import Legumes from "../assets/amrache2.jpg";

// import frites from "../assets/frenchFries.jpg";
import cake from "../assets/cake.jpg";
import soup from "../assets/soup.jpg";
import basbousa from "../assets/basbousa.jpeg";

import basbosaCreme from "../assets/basbousaAuCreme.jpg";

import LegumesSautes from "../assets/sauteLégumes.jpeg";

import saladeRoyale from "../assets/saladeRoyale.jpeg";
import saladevaries from "../assets/saladevaries.jpg";

import kouskous from "../assets/ambrachVeg2.jpg";
// import tajine from "../assets/tajine.jpg";
// import Fruits from "../assets/fruits.jpg";
import amrache1 from "../assets/amranchVeg4.webp";
import amrache2 from "../assets/ambrachVeg3.jpg";
import amrache3 from "../assets/amrache2.jpg";

export const PRODUCTS = [
  {
    category: "LegumesEpluches",
    items: [
      {
        name: " خضروات مقطعة حسب الاختيار",
        description: "خضروات مقشرة",
        image: amrache1,
      },
      {
        name: "خضروات طازجة ومجهزة ",
        description: "خضروات مقشرة",
        image: amrache2,
      },
      {
        name: "بطاطس مقلية",
        description: "بطاطس مقلية بطريقة هشة",
        image: amrache3,
      },
    ],
  },
  {
    category: "Pastillas",
    items: [
      {
        name: "بسطيلات سمك",
        description: "بسطيلات لذيذة بالمأكولات البحرية",
        image: bstillaPoison,
      },
      {
        name: "بسطيلات دجاج",
        description: "بسطيلات تقليدية بالدجاج",
        image: pastillaAupoulet,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "باسبوسا عادية",
        description: "باسبوسا كلاسيكية بدون حشوة",
        image: basbousa,
      },
      {
        name: "باسبوسا بالكريمة",
        description: "باسبوسا معززة بالكريمة",
        image: basbosaCreme,
      },
      {
        name: "كيك",
        description: "كيك منزلي لذيذ",
        image: cake,
      },
    ],
  },

  {
    category: "legumesPack",
    items: [
      {
        name: "باك كسكسي",
        description: "باك كاملة لتحضير كسكسي تقليدي",
        image: kouskous,
      },
      {
        name: "باك شوربات",
        description: "باك شوربات متنوعة ولذيذة",
        image: soup,
      },
      {
        name: "باك خضروات مطهية",
        description: "خليط من الخضروات الطازجة للتحمير",
        image: LegumesSautes,
      },
    ],
  },
  {
    category: "salads",
    items: [
      {
        name: "سلطات متنوعة",
        description: "مجموعة من السلطات الطازجة",
        image: saladevaries,
      },
      {
        name: "سلطات ملكية",
        description: "سلطات فاخرة مع مكونات ممتازة",
        image: saladeRoyale,
      },
    ],
  },
];
