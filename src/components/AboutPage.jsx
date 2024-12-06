// import aboutImg from "../assets/VEGETABLES.jpg";

// const AboutPage = () => {
//   return (
//     <section
//       id="about"
//       className="container mx-auto my-16 px-6 rtl font-tajawal"
//     >
//       {/* Section Title */}
//       <h2 className="text-4xl font-extrabold text-green-800 text-center mb-12 tracking-wide">
//         من نحن
//       </h2>

//       {/* Content Container */}
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/*  */}
//         <div className="relative">
//           <img
//             src={aboutImg}
//             alt="Moroccan food"
//             className="rounded-lg shadow-lg"
//           />
//           <div className="absolute top-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
//             الأصالة والجودة
//           </div>
//         </div>
//         {/* Left: Text Content */}
//         <div className="bg-white rounded-lg shadow-lg p-8 text-center">
//           <h3 className="text-2xl font-semibold text-green-700 mb-4">
//             نكهات مغربية أصيلة
//           </h3>
//           <p className="text-green-700 leading-relaxed mb-4">
//             مطبخ المغرب هو المكان المثالي لاكتشاف أروع الأطباق المغربية
//             التقليدية. نتخصص في تقديم وجبات مثل البسطيلة والتاجين بأنواعه، حيث
//             نستخدم أجود المكونات الطازجة لإبداع نكهات تعكس التراث المغربي الغني.
//           </p>
//           <p className="text-green-700 leading-relaxed">
//             نؤمن بأن الطعام ليس مجرد وجبة بل تجربة تواصل وتواصل مع الثقافة.
//             لذلك، نهتم بأدق التفاصيل لتقديم أفضل تجربة غذائية لعملائنا.
//           </p>
//           <div className="mt-6">
//             <button
//               className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
//               onClick={() => window.open("https://wa.me/YOURNUMBER", "_blank")}
//             >
//               تواصل معنا
//             </button>
//           </div>
//         </div>

//         {/* Right: Image */}
//       </div>
//     </section>
//   );
// };

// export default AboutPage;
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
        {/* Left: Image */}
        <div className="relative">
          <img
            src={aboutImg}
            alt="Assil Moroccan Food"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute top-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
            الأصالة والجودة
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">أصيل</h3>
          <p className="text-green-700 leading-relaxed mb-4">
            في أصيل، نقدم تجربة فريدة من نوعها تجمع بين النكهات التقليدية
            المغربية والابتكار الحديث. هدفنا هو تقديم أطباق مستوحاة من التراث
            المغربي العريق بأعلى معايير الجودة.
          </p>
          <p className="text-green-700 leading-relaxed">
            كل طبق يتم تحضيره بعناية فائقة وباستخدام أفضل المكونات الطازجة،
            لإبراز أصالة المذاق المغربي. نحن نؤمن بأن الطعام هو رحلة إلى قلب
            الثقافة والتقاليد، ولهذا السبب نقدم تجربة طعام تعكس شغفنا وحبنا
            للمطبخ المغربي.
          </p>
          <div className="mt-6">
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
              onClick={() =>
                window.open("https://wa.me/+212 648-614441", "_blank")
              }
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
