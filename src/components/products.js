import bstillaPoison from "../assets/pastilaPison.webp";
import pastillaAupoulet from "../assets/pastillaAupoulet.png";
import cake from "../assets/cake.jpg";
import soup from "../assets/soup.jpg";
import basbousa from "../assets/basbousa.jpeg";
import basbosaCreme from "../assets/basbousaAuCreme.jpg";
import LegumesSautes from "../assets/sauteLégumes.jpg";
import saladeRoyale from "../assets/saladeRoyale.jpeg";
import saladevaries from "../assets/saladevaries.jpg";
import x from "../assets/amranchVeg4.jpg";

import kouskous from "../assets/ambrachVeg2.jpg";
import amrache3 from "../assets/amrache2.jpg";

export const PRODUCTS = [
  {
    category: "LegumesEpluches",
    items: [
      {
        name: "خضروات مقطعة حسب الاختيار",
        description: "خضروات مقشرة",
        currentPrice: " 25 MAD",
        oldPrice: " 26 MAD",
        weight: "250 g",
        image: LegumesSautes,
      },
      {
        name: "خضروات طازجة ومجهزة",
        description: "خضروات مقشرة",
        currentPrice: " 25 MAD",
        oldPrice: " 26 MAD",
        weight: "250 g",
        image: x,
      },

      {
        name: "بطاطس فريت",
        description: "مقشرة",
        currentPrice: " 7 MAD",
        oldPrice: " 8 MAD",
        weight: "250 g",
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
        // currentPrice:" 450,
        // oldPrice:" 47 MAD"5,
        image: bstillaPoison,
      },
      {
        name: "بسطيلات دجاج",
        description: "بسطيلات تقليدية بالدجاج",
        // currentPrice: " 400 MAD",
        // oldPrice: " 42 MAD",
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
        // currentPrice: " 30 MAD",
        // oldPrice: " 33 MAD",
        image: basbousa,
      },
      {
        name: "باسبوسا بالكريم",
        description: "باسبوسا معززة بالكريمة",
        // currentPrice: " 40 MAD",
        // oldPrice: " 44 MAD",
        image: basbosaCreme,
      },
      {
        name: "الكيك المنزلية",
        description: "الثمن على حسب الكيك المختارة",
        currentPrice: " ...MAD",
        image: cake,
      },
    ],
  },
  {
    category: "legumesPack",
    items: [
      {
        name: "باك كسكس",
        description: "باك  لتحضير كسكس تقليدي",
        currentPrice: " 15 MAD",
        oldPrice: " 20 MAD",
        weight: "300 g",
        image: kouskous,
      },
      {
        name: "باك شوربة",
        description: "باك شوربات متنوعة ولذيذة",
        currentPrice: " 10 MAD",
        oldPrice: " 11 MAD",
        weight: "250 g",
        image: soup,
      },
      {
        name: " باك خضر جاهزة للقلي",
        currentPrice: " 10 MAD",
        oldPrice: " 11 MAD",
        weight: "250 g",
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
