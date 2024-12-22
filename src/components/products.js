import bstillaPoison from "../assets/pastilaPison.webp";
import pastillaAupoulet from "../assets/pastillaAupoulet.png";
import cake from "../assets/cake.jpg";
import soup from "../assets/soup.jpg";
import basbousa from "../assets/basbousa.jpeg";
import basbosaCreme from "../assets/basbousaAuCreme.jpg";
import LegumesSautes from "../assets/sauteLégumes.jpg";
import saladeRoyale from "../assets/saladeRoyale.jpeg";
import saladevaries from "../assets/saladevaries.jpg";
// import x from "../assets/amranchVeg4.jpg";
import kouskous from "../assets/ambrachVeg2.jpg";
import amrache3 from "../assets/amrache2.jpg";
//
import tomate from "../assets/New folder/tomate.jpg";
import tomateSmall from "../assets/New folder/tomate2.jpg";
import brokoli from "../assets/New folder/brokoli.jpg";
import chilfour from "../assets/New folder/chiflour.jpg";
import mkawer from "../assets/melfoufe.jpg";
import batata from "../assets/batata2.jpg";
import jazar from "../assets/jazar.jpg";
import basal from "../assets/basla.jpg";
import korjute from "../assets/corg.jpg";
import jelbana from "../assets/lobya.jpg";
import lobiya from "../assets/lobiya.jpg";
import krafes from "../assets/New folder/krafs.jpg";

export const PRODUCTS = [
  {
    category: "LegumesEpluches",
    items: [
      {
        id: 1,
        image: batata,
        name: "بطاطس",
        description: " مقشرة",
        currentPrice: 7,
        oldPrice: 8,
        weight: "250 g",
      },
      {
        id: 2,
        name: "بصل",
        description: "مقشرة",
        currentPrice: 7,
        oldPrice: 8,
        weight: "250 g",
        image: basal,
      },
      {
        id: 3,
        name: "جزر",
        description: "مقشرة",
        currentPrice: 7,
        oldPrice: 8,
        weight: "250 g",
        image: jazar,
      },
      {
        id: 4,
        name: " المكور الملفوف ",
        description: "",
        currentPrice: 5,
        oldPrice: 6,
        weight: "250 g",
        image: mkawer,
      },
      {
        id: 5,
        image: brokoli,
        name: "بروكولي",
        description: "",
        currentPrice: 10,
        oldPrice: 11,
        weight: "250 g",
      },
      {
        id: 6,
        name: "كورجيت",
        description: "",
        currentPrice: 7,
        oldPrice: 8,
        weight: "250 g",
        image: korjute,
      },
      {
        id: 7,
        name: "القزبر معدنوس",
        description: "",
        currentPrice: 4,
        oldPrice: 5,
        weight: "",
        image: krafes,
      },
      {
        id: 8,
        name: "بطاطس فريت",
        description: "مقشرة",
        currentPrice: 7,
        oldPrice: 8,
        weight: "250 g",
        image: amrache3,
      },
      {
        id: 9,
        name: "طماطم  ",
        description: "",
        currentPrice: 5,
        oldPrice: 6,
        weight: "250 g",
        image: tomate,
      },
      {
        id: 10,
        name: "طماطم سوغيز ",
        description: "",
        currentPrice: 10,
        oldPrice: 11,
        weight: "250 g",
        image: tomateSmall,
      },
      {
        id: 11,
        name: "شفلور",
        currentPrice: 6,
        oldPrice: 8,
        weight: "250 g",
        image: chilfour,
      },
      {
        id: 12,
        name: " لوبية خضرة",
        currentPrice: 8,
        oldPrice: 9,
        weight: "250 g",
        image: lobiya,
      },
      {
        id: 13,
        name: "جلبانة",
        description: " مقشرة",
        currentPrice: 8,
        oldPrice: " 8",
        weight: "250 g",
        image: jelbana,
      },
    ],
  },
  {
    category: "Pastillas",
    items: [
      {
        id: 14,
        name: "بسطيلات سمك",
        description: "بسطيلات لذيذة بالمأكولات البحرية",
        image: bstillaPoison,
      },
      {
        id: 15,
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
        id: 16,
        name: "باسبوسا عادية",
        description: "باسبوسا كلاسيكية بدون حشوة",
        image: basbousa,
      },
      {
        id: 17,
        name: "باسبوسا بالكريم",
        description: "باسبوسا معززة بالكريمة",
        image: basbosaCreme,
      },
      {
        id: 18,
        name: "الكيك المنزلية",
        description: "الثمن على حسب الكيك المختارة",
        image: cake,
      },
    ],
  },
  {
    category: "legumesPack",
    items: [
      {
        id: 19,
        name: "باك كسكس",
        description: "باك لتحضير كسكس تقليدي",
        currentPrice: 15,
        oldPrice: 20,
        weight: "300 g",
        image: kouskous,
      },
      {
        id: 20,
        name: "باك شوربة",
        description: "باك شوربات متنوعة ولذيذة",
        currentPrice: 10,
        oldPrice: 11,
        weight: "250 g",
        image: soup,
      },
      {
        id: 21,
        name: " باك خضر جاهزة للقلي",
        currentPrice: 10,
        oldPrice: 11,
        weight: "250 g",
        image: LegumesSautes,
      },
    ],
  },
  {
    category: "salads",
    items: [
      {
        id: 22,
        name: "سلطات متنوعة",
        description: "مجموعة من السلطات الطازجة",
        image: saladevaries,
      },
      {
        id: 23,
        name: "سلطات ملكية",
        description: "سلطات فاخرة مع مكونات ممتازة",
        image: saladeRoyale,
      },
    ],
  },
];
