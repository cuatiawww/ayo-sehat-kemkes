const imgSwitch = "../assets/Switch.png";

export default function InfoSection() {
  const features = [
    {
      title: "Tidak Merokok",
      description: "Rokok meningkatkan risiko kanker, penyakit jantung, dan paru-paru.",
      position: "left",
      icon: "../assets/icon1.png",
      alt: "Ikon larangan merokok",
    },
    {
      title: "Hindari Konsumsi Alkohol",
      description: "Alkohol dapat merusak organ tubuh dan memicu berbagai penyakit kronis.",
      position: "left",
      icon: "../assets/icon2.png",
      alt: "Ikon larangan minum alkohol",
    },
    {
      title: "Batasi Konsumsi Gula, Garam, dan Lemak",
      description: "Gula maksimal 50 gram, garam 5 gram, dan lemak total 67 gram per hari.",
      position: "left",
      icon: "../assets/icon5.png",
      alt: "Ikon batasi gula, garam, dan lemak",

    },
    {
      title: "Minum Air Putih yang Cukup",
      description: "Minimal 8 gelas atau 2 liter per hari, sesuaikan dengan aktivitas.",
      position: "right",
      icon: "../assets/icon4.png",
      alt: "Ikon minum air putih",
    },
    {
      title: "Konsumsi Makanan Bergizi Seimbang",
      description: "Utamakan buah, sayur, protein tanpa lemak, dan karbohidrat kompleks.",
      position: "right",
      icon: "../assets/icon6.png",
      alt: "Ikon makanan sehat",
    },
    {
      title: "Rutin Berolahraga",
      description: "Minimal 150 menit aktivitas fisik sedang setiap minggu.",
      position: "right",
      icon: "../assets/icon3.png",
      alt: "Ikon olahraga rutin",
    },
  ];

  return (
    <div className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-[fadeIn_0.6s_ease-out]">
          <h2 className="not-italic text-[#18b3ab] text-[24px] sm:text-[32px] lg:text-[40px] xl:text-[50px] leading-[1.3] sm:leading-[1.2] lg:leading-[30px] mb-4 sm:mb-5 lg:mb-6">
            Perilaku Hidup Sehat
          </h2>
          <p className="not-italic text-[14px] sm:text-[16px] lg:text-[18px] xl:text-[22px] leading-[22px] sm:leading-[26px] lg:leading-[28px] xl:leading-[30px] text-neutral-600 max-w-4xl mx-auto px-4">
            Perilaku hidup sehat adalah kebiasaan sehari-hari yang dilakukan untuk menjaga dan meningkatkan kesehatan tubuh dan pikiran, seperti makan bergizi, olahraga teratur, cukup istirahat, serta menjaga kebersihan dan kesehatan mental.
          </p>
        </div>

        <div className="relative">
          {/* Mobile and Tablet View */}
          <div className="lg:hidden space-y-5 sm:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[15px] sm:rounded-[20px] p-4 sm:p-5 border border-gray-200 hover:border-[#18b3ab] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-[slideInUp_0.6s_ease-out] opacity-0"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-[#18b3ab] rounded-[15px] sm:rounded-[20px] w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] flex-shrink-0 hover:bg-[#16a199] hover:rotate-6 hover:scale-110 transition-all duration-500 flex items-center justify-center overflow-hidden shadow-lg group">
                    <img
                      src={feature.icon}
                      alt={feature.alt}
                      title={feature.title}
                      className="w-auto h-auto max-w-[45px] max-h-[45px] sm:max-w-[55px] sm:max-h-[55px] object-contain transition-transform duration-500 group-hover:scale-125"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="not-italic text-[16px] sm:text-[18px] leading-[20px] sm:leading-[24px] text-[#18b3ab] mb-1 sm:mb-2 transition-colors duration-300 hover:text-[#16a199]">
                      {feature.title}
                    </h3>
                    <p className="not-italic text-[13px] sm:text-[15px] leading-[20px] sm:leading-[24px] text-neutral-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View - Staggered Layout */}
          <div className="hidden lg:flex items-start justify-between gap-0">
            {/* Left Features */}
            <div className="w-[35%] pt-0">
              {features.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 xl:gap-6 justify-end group animate-[slideInLeft_0.8s_ease-out] opacity-0"
                  style={{
                    marginBottom: index < 2 ? "100px" : "0",
                    marginRight: index === 1 ? "40px" : "0",
                    animationDelay: `${index * 0.2}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="text-right max-w-[280px] xl:max-w-[335px] transition-all duration-500 group-hover:translate-x-[-10px]">
                    <h3 className="not-italic text-[20px] leading-[24px] text-[#18b3ab] mb-2 group-hover:text-[#16a199] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="not-italic text-[16px] leading-[24px] text-neutral-600">
                      {feature.description}
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#18b3ab] rounded-[20px] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative bg-[#18b3ab] rounded-[20px] w-[88px] h-[88px] flex-shrink-0 group-hover:bg-[#16a199] group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 cursor-pointer flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-2xl">
                      <img
                        src={feature.icon}
                        alt={feature.alt}
                        title={feature.title}
                        className="w-auto h-auto max-w-[60px] max-h-[60px] object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-12deg]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Gambar Tengah */}
            <div className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] flex-shrink-0 mx-8 xl:mx-12 mt-8 animate-[scaleIn_1s_ease-out]">
              <div className="absolute inset-0 animate-pulse">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 522">
                  <circle cx="261" cy="261" r="261" fill="#18B3AB" opacity="0.1" />
                </svg>
              </div>
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 522 522">
                  <circle cx="261" cy="261" r="250" stroke="#18B3AB" strokeWidth="2" strokeDasharray="10 20" opacity="0.3" fill="none" />
                </svg>
              </div>
              <div className="absolute inset-0 hover:scale-110 transition-transform duration-700 cursor-pointer flex items-center justify-center group">
                <div className="absolute inset-0 bg-[#18b3ab] rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700"></div>
                {imgSwitch ? (
                  <img
                    src={imgSwitch}
                    alt="Keluarga bahagia yang mewakili kesehatan dan kesejahteraan"
                    title="Perilaku Hidup Sehat - Keluarga Sehat"
                    className="relative block max-w-none size-full object-cover rounded-full shadow-2xl group-hover:shadow-[0_0_50px_rgba(24,179,171,0.5)] transition-all duration-700"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative w-full h-full bg-[#18b3ab] rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-white text-6xl">Hospital</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Features */}
            <div className="w-[35%]">
              {features.slice(3, 6).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 xl:gap-6 group animate-[slideInRight_0.8s_ease-out] opacity-0"
                  style={{
                    marginBottom: index < 2 ? "100px" : "0",
                    marginLeft: index === 1 ? "40px" : "0",
                    animationDelay: `${(index + 3) * 0.2}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#18b3ab] rounded-[20px] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="relative bg-[#18b3ab] rounded-[20px] w-[88px] h-[88px] flex-shrink-0 group-hover:bg-[#16a199] group-hover:scale-125 group-hover:rotate-[-12deg] transition-all duration-500 cursor-pointer flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-2xl">
                      <img
                        src={feature.icon}
                        alt={feature.alt}
                        title={feature.title}
                        className="w-auto h-auto max-w-[60px] max-h-[60px] object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-[12deg]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="max-w-[280px] xl:max-w-[335px] transition-all duration-500 group-hover:translate-x-[10px]">
                    <h3 className="not-italic text-[20px] leading-[24px] text-[#18b3ab] mb-2 group-hover:text-[#16a199] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="not-italic text-[16px] leading-[24px] text-neutral-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div
          className="text-center mt-8 sm:mt-12 lg:mt-16 animate-[fadeIn_1s_ease-out_1.2s] opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <button className="bg-[#d5dd23] hover:bg-[#c5cd13] transition-all duration-500 hover:shadow-2xl hover:scale-110 hover:-translate-y-2 rounded-full px-8 sm:px-12 lg:px-16 xl:px-[85px] py-3 sm:py-4 lg:py-5 xl:py-[25px] border border-[#fcffbe] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.15)] group">
            <span className="font-medium text-[16px] sm:text-[20px] lg:text-[25px] xl:text-[30px] leading-[1.3] sm:leading-[30px] text-[#383838] group-hover:scale-105 inline-block transition-transform duration-300">
              Simak Perilaku Hidup Sehat Lainnya
            </span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}