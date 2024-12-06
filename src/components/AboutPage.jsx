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
            في **أصيل**، نقدم تجربة فريدة من نوعها تجمع بين النكهات التقليدية
            المغربية والابتكار الحديث. هدفنا هو تقديم أطباق مستوحاة من التراث
            المغربي العريق بأعلى معايير الجودة.
          </p>
          <p className="text-green-700 leading-relaxed mb-4">
            كل طبق يتم تحضيره بعناية فائقة وباستخدام أفضل المكونات الطازجة،
            لإبراز أصالة المذاق المغربي. نحن نؤمن بأن الطعام هو رحلة إلى قلب
            الثقافة والتقاليد، ولهذا السبب نقدم تجربة طعام تعكس شغفنا وحبنا
            للمطبخ المغربي.
          </p>

          {/* New Section: What We Offer */}
          <div className="bg-green-50 p-6 mt-6 rounded-lg shadow-md border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-4">
              ماذا نقدم؟
            </h3>
            <ul className="text-green-700 leading-relaxed  font-bold space-y-2 text-center ">
              <li>✔️ باك الكسكس</li>
              <li>✔️ باك الشوربة</li>
              <li>✔️ باك الخضروات المقلية</li>
              <li>✔️ خضروات مقشرة حسب اختيارك</li>
              <li>✔️ خضروات مقشرة ومقطعة حسب اختيارك</li>
              <li>✔️ تشكيلة الفواكه الطازجة</li>
              <li>✔️ البطاطس المقلية</li>
              <li>✔️ بسطيلة السمك</li>
              <li>✔️ بسطيلة بالدجاج</li>
              <li>✔️ بسبوسة كلاسيكية</li>
              <li>✔️ بسبوسة بالكريمة</li>
              <li>✔️ كيك منزلي</li>
              <li>✔️ سلطات متنوعة</li>
              <li>✔️ سلطات ملكية</li>
            </ul>
          </div>

          <div className="mt-8">
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
              onClick={() =>
                window.open("https://wa.me/+212648614441", "_blank")
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
