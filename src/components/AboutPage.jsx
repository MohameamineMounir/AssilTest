// // src/components/AboutPage.jsx

// const AboutPage = () => {
//   return (
//     <section
//       id="about"
//       className="container mx-auto my-16 px-4 rtl font-tajawal"
//     >
//       <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
//         من نحن
//       </h2>
//       <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
//         <p className="text-green-700 mb-4">
//           مطبخ المغرب هو مكان لاستكشاف أروع الأطباق المغربية التقليدية. نتخصص في
//           تقديم وجبات مثل البسطيلة والتاجين بأنواعه.
//         </p>
//         <p className="text-green-700 mb-4">
//           نستخدم الخضروات الطازجة والتوابل العطرية لخلق نكهات فريدة تعكس التراث
//           المغربي الغني.
//         </p>
//         <div className="flex justify-center space-x-4 mt-8">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="32"
//             height="32"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-green-500 hover:text-green-700 cursor-pointer"
//             onClick={() => window.open("https://wa.me/YOURNUMBER", "_blank")}
//           >
//             <path d="M17.6 6.4c-1-1-2.2-1.8-3.6-2.3-1.4-.5-2.9-.7-4.4-.5-3 .4-5.6 2.4-6.7 5.3-1.1 2.9-.4 6.2 1.7 8.4l.4.4-.6 2.1c-.1.5.3.9.8.8l2.1-.6.4.4c2.3 2.1 5.6 2.8 8.4 1.7 2.9-1.1 4.9-3.7 5.3-6.7.2-1.5 0-3-.5-4.4-.5-1.4-1.3-2.6-2.3-3.6z" />
//             <path d="M14.7 12.5c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.8-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.3-.3.1-.1.2-.2.2-.4 0-.2-.5-1.3-.7-1.8-.2-.5-.4-.4-.5-.4-.2 0-.4 0-.6 0-.2 0-.5.2-.7.4-.7.7-1 1.6-.9 2.5.1 1 .5 1.9 1.3 2.7 1.4 1.4 3 2.2 4.5 2.1.7-.1 1.4-.4 1.9-1 .4-.5.4-1.1.3-1.7-.1-.2-.3-.3-.5-.4z" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutPage;
// src/components/AboutPage.jsx

import aboutImg from "../assets/VEGETABLES.jpg";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="container mx-auto my-16 px-6 rtl font-tajawal"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-green-800 text-center mb-12 tracking-wide">
        من نحن
      </h2>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/*  */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Moroccan food"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
            الأصالة والجودة
          </div>
        </div>
        {/* Left: Text Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
            نكهات مغربية أصيلة
          </h3>
          <p className="text-green-700 leading-relaxed mb-4">
            مطبخ المغرب هو المكان المثالي لاكتشاف أروع الأطباق المغربية
            التقليدية. نتخصص في تقديم وجبات مثل البسطيلة والتاجين بأنواعه، حيث
            نستخدم أجود المكونات الطازجة لإبداع نكهات تعكس التراث المغربي الغني.
          </p>
          <p className="text-green-700 leading-relaxed">
            نؤمن بأن الطعام ليس مجرد وجبة بل تجربة تواصل وتواصل مع الثقافة.
            لذلك، نهتم بأدق التفاصيل لتقديم أفضل تجربة غذائية لعملائنا.
          </p>
          <div className="mt-6">
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
              onClick={() => window.open("https://wa.me/YOURNUMBER", "_blank")}
            >
              تواصل معنا
            </button>
          </div>
        </div>

        {/* Right: Image */}
      </div>
    </section>
  );
};

export default AboutPage;
