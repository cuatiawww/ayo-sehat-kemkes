import { motion } from "framer-motion";

const imgHeroBackground = "../assets/hero.png";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Konten bagian utama */}
      <div className="relative bg-[#18b3ab] h-[500px] sm:h-[650px] lg:h-[858px] overflow-hidden">
        {/* Gambar latar belakang */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt="image/icon"
              className="absolute h-[108.92%] left-[-1.09%] max-w-none top-[0.24%] w-[113.69%] object-cover"
              src={imgHeroBackground}
            />
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="relative h-full">
          {/* Main Heading */}
          <motion.div
            className="absolute left-[5%] sm:left-[8%] lg:left-[127px] top-[15%] sm:top-[20%] lg:top-[231px] lg:translate-y-[-50%]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: "easeOut",
            }}
          >
            <h1 className="not-italic text-[36px] sm:text-[60px] lg:text-[100px] leading-[1.1] sm:leading-[1.1] lg:leading-[30px] text-white whitespace-nowrap">
              Ayo Sehat
            </h1>
          </motion.div>

          {/* Subheading  */}
          <motion.div
            className="absolute left-[5%] sm:left-[8%] lg:left-[127px] top-[28%] sm:top-[33%] lg:top-[324px] lg:translate-y-[-50%] w-[90%] sm:w-[450px] lg:w-[510px]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.0,
              ease: "easeOut",
            }}
          >
            <h2 className="not-italic text-[22px] sm:text-[36px] lg:text-[38px] leading-[1.2] sm:leading-[1.2] lg:leading-[40px] text-white">
             Kementerian Kesehatan Republik Indonesia
            </h2>
          </motion.div>

          {/* Description  */}
          <motion.div
            className="absolute left-[5%] sm:left-[8%] lg:left-[131px] top-[45%] sm:top-[50%] lg:top-[429px] lg:translate-y-[-50%] w-[90%] sm:w-[550px] lg:w-[640px]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1.2,
              ease: "easeOut",
            }}
          >
            <p className="not-italic text-[13px] sm:text-[16px] lg:text-[20px] leading-[1.4] sm:leading-[1.5] lg:leading-[30px] text-white">
             Ayo Sehat Kemenkes RI merupakan platform/saluran sumber informasi,
edukasi kesehatan, serta gaya hidup sehat resmi dari Kementerian
Kesehatan sehingga dapat dipertanggungjawabkan dan informasi yang diberikan sejalan dengan program pemerintah.
            </p>
          </motion.div>

          {/* Button  */}
          <motion.div
            className="absolute left-[5%] sm:left-[8%] lg:left-[131px] top-[72%] sm:top-[72%] lg:top-[620px]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.4,
              type: "spring",
              stiffness: 200,
            }}
          >
            <button className="bg-[#d5dd23] hover:bg-[#c5cd13] transition-all duration-300 hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.25)] rounded-[100px] w-[220px] sm:w-[270px] lg:w-[300px] h-[55px] sm:h-[70px] lg:h-[80px] border-[0.5px] border-[#fcffbe] shadow-[0px_5px_10px_0px_rgba(0,0,0,0.15)] flex items-center justify-center">
              <span
                className="font-medium text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.2] text-[#383838]"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Mulai Konsultasi
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}