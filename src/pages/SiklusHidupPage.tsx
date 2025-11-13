/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import CustomBreadcrumb from "../components/CustomBreadcrump";
import RightSidebar from "../components/RightSidebar";

// === DUMMY DATA (tanpa konten asli) ===
// Card stage data
const lifecycleStages = [
  {
    id: 1,
    name: "Bayi dan Balita",
    age: "< 5 Tahun",
    slug: "bayi-balita",
    image: "../assets/image.png",
    color: "#d5dd23",
  },
  {
    id: 2,
    name: "Anak-Anak",
    age: "5-9 Tahun",
    slug: "anak-anak",
    image: "../assets/Image (4).png",
    color: "#d5dd23",
  },
  {
    id: 3,
    name: "Remaja",
    age: "10-18 Tahun",
    slug: "remaja",
    image: "../assets/Image (1).png",
    color: "#d5dd23",
  },
  {
    id: 4,
    name: "Dewasa",
    age: "18-59 Tahun",
    slug: "dewasa",
    image: "../assets/Image (2).png",
    color: "#d5dd23",
  },
  {
    id: 5,
    name: "Lansia",
    age: "60+ Tahun",
    slug: "lansia",
    image: "../assets/Image (3).png",
    color: "#d5dd23",
  },
];

// Content per stage
const stageContent = {
  "bayi-balita": {
    title: "Bayi dan Balita (< 5 Tahun)",
    description:
      "Bayi dan balita merupakan kelompok usia di bawah 5 tahun yang merupakan periode emas pertumbuhan dan perkembangan. Upaya kesehatan bayi dan balita memiliki tujuan untuk mempersiapkan anak menjadi generasi yang sehat, cerdas, berkualitas, dan produktif serta berperan serta dalam menjaga, mempertahankan dan meningkatkan kesehatan dirinya.",
    description2:
      "Kesehatan bayi merupakan hal yang sangat penting diperhatikan karena pada masa ini bayi mengalami perubahan fisik, psikologis, dan sosial yang signifikan. Kementerian Kesehatan RI menekankan bahwa kesehatan bayi sangat dipengaruhi oleh pola makan yang sehat, aktivitas fisik yang teratur. Bayi yang sehat ditandai dengan berat badan, tinggi badan, dan indeks massa tubuh yang sesuai dengan usianya.",
    description3:
      "Upaya Kesehatan Bayi meliputi perkembangan positif, pencegahan kecelakaan, pencegahan kekerasan, kesehatan reproduksi, pencegahan dan pengendalian penyakit menular dan pencegahan penyakit tidak menular, gizi dan aktifitas fisik; kesehatan Jiwa; dan kesehatan bayi pada situasi krisis.",
    description4:
      "Bayi juga perlu memiliki kesehatan mental dan emosional yang baik, serta kemampuan untuk mengambil keputusan yang baik dan bertanggung jawab atas tindakan mereka. Pola makan yang sehat dan bergizi sangat penting bagi kesehatan bayi. Orangtua dan bayi sendiri perlu memperhatikan asupan makanan yang mengandung karbohidrat, protein, lemak, vitamin, dan mineral yang cukup untuk mendukung pertumbuhan dan perkembangan mereka.",
    description5:
      "Aktivitas fisik yang teratur juga perlu diperhatikan, seperti olahraga ringan atau berjalan-jalan, untuk membantu meningkatkan kesehatan jantung dan paru-paru, serta kekuatan otot dan tulang. Jika ada keluhan atau tanda-tanda tidak sehat pada bayi, segera konsultasikan ke dokter atau fasilitas kesehatan terdekat. Pencegahan dan perawatan yang tepat dapat membantu mempertahankan kesehatan bayi dan mendukung pertumbuhan dan perkembangan yang optimal.",
    description6:
      "Upaya Kesehatan Bayi selain ditujukan kepada bayi juga ditujukan kepada orang tua atau pengasuh untuk mendukung dan mewujudkan bayi yang sehat. Upaya Kesehatan Bayi harus melibatkan peran serta bayi dalam menjaga mempertahankan dan meningkatkan kesehatan dirinya.",
    description7:
      "Dukungan keluarga sangat diperlukan sehingga bayi dapat tumbuh sehat sesuai dengan kemampuan, minat, dan bakatnya; mencegah perkawinan bayi; dan memfasilitasi bayi mendapatkan pelayanan kesehatan sesuai standar. Dukungan Keluarga sebagaimana dimaksud dalam pengasuhan, pemeliharaan, Pendidikan, dan perlindungan kepada bayi.",
    articles: [
      {
        id: 1,
        title: "ASI Eksklusif untuk Bayi",
        description:
          "ASI adalah nutrisi terbaik untuk bayi dengan kandungan lengkap untuk tumbuh kembang optimal.",
        image:
          "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "8 Nov 2025",
        readTime: "5 menit",
      },
      {
        id: 2,
        title: "Jadwal Imunisasi Bayi",
        description:
          "Imunisasi lengkap melindungi bayi dari berbagai penyakit berbahaya yang dapat dicegah.",
        image:
          "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "6 Nov 2025",
        readTime: "4 menit",
      },
      {
        id: 3,
        title: "Stimulasi Dini untuk Bayi",
        description:
          "Stimulasi sejak dini membantu perkembangan otak dan kemampuan motorik bayi secara optimal.",
        image:
          "https://images.unsplash.com/photo-1519689680058-324335c77eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "4 Nov 2025",
        readTime: "6 menit",
      },
      {
        id: 4,
        title: "MPASI Pertama Bayi",
        description:
          "Makanan pendamping ASI yang tepat penting untuk memenuhi kebutuhan nutrisi bayi mulai usia 6 bulan.",
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "2 Nov 2025",
        readTime: "5 menit",
      },
    ],
    topics: [
      {
        id: 1,
        title: "Stunting pada Bayi",
        image:
          "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Bayi",
      },
      {
        id: 2,
        title: "Perkembangan Motorik",
        image:
          "https://images.unsplash.com/photo-1519689680058-324335c77eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Bayi",
      },
      {
        id: 3,
        title: "Gizi Seimbang Bayi",
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Bayi",
      },
      {
        id: 4,
        title: "Imunisasi Dasar Lengkap",
        image:
          "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Bayi",
      },
      {
        id: 5,
        title: "Tumbuh Kembang Optimal",
        image:
          "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Bayi",
      },
      {
        id: 6,
        title: "ASI Eksklusif",
        image:
          "https://images.unsplash.com/photo-1566753323558-f4e0952af115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Bayi",
      },
    ],
  },
  "anak-anak": {
    title: "Anak-Anak (5-9 Tahun)",
    description:
      "Anak-anak merupakan kelompok usia 5 tahun sampai sebelum berusia 10 tahun yang merupakan periode penting dalam pembentukan karakter dan pengembangan kemampuan akademis. Upaya kesehatan anak-anak memiliki tujuan untuk mempersiapkan anak menjadi generasi yang sehat, cerdas, berkualitas, dan produktif serta berperan serta dalam menjaga, mempertahankan dan meningkatkan kesehatan dirinya.",
    description2:
      "Kesehatan anak-anak merupakan hal yang sangat penting diperhatikan karena pada masa ini anak mengalami perubahan fisik, psikologis, dan sosial yang signifikan. Kementerian Kesehatan RI menekankan bahwa kesehatan anak-anak sangat dipengaruhi oleh pola makan yang sehat, aktivitas fisik yang teratur. Anak yang sehat ditandai dengan berat badan, tinggi badan, dan indeks massa tubuh yang sesuai dengan usianya.",
    description3:
      "Upaya Kesehatan Anak-Anak meliputi perkembangan positif, pencegahan kecelakaan, pencegahan kekerasan, pencegahan dan pengendalian penyakit menular dan pencegahan penyakit tidak menular, gizi dan aktifitas fisik, kesehatan Jiwa, dan kesehatan anak pada situasi krisis.",
    description4:
      "Anak-anak juga perlu memiliki kesehatan mental dan emosional yang baik, serta kemampuan untuk mengambil keputusan yang baik dan bertanggung jawab atas tindakan mereka. Pola makan yang sehat dan bergizi sangat penting bagi kesehatan anak. Orangtua dan anak sendiri perlu memperhatikan asupan makanan yang mengandung karbohidrat, protein, lemak, vitamin, dan mineral yang cukup untuk mendukung pertumbuhan dan perkembangan mereka.",
    description5:
      "Aktivitas fisik yang teratur juga perlu diperhatikan, seperti olahraga, bermain di luar ruangan, atau kegiatan ekstrakurikuler, untuk membantu meningkatkan kesehatan jantung dan paru-paru, serta kekuatan otot dan tulang. Jika ada keluhan atau tanda-tanda tidak sehat pada anak, segera konsultasikan ke dokter atau fasilitas kesehatan terdekat. Pencegahan dan perawatan yang tepat dapat membantu mempertahankan kesehatan anak dan mendukung pertumbuhan dan perkembangan yang optimal.",
    description6:
      "Upaya Kesehatan Anak-Anak selain ditujukan kepada anak juga ditujukan kepada orang tua atau pengasuh untuk mendukung dan mewujudkan anak yang sehat. Upaya Kesehatan Anak harus melibatkan peran serta anak dalam menjaga mempertahankan dan meningkatkan kesehatan dirinya.",
    description7:
      "Dukungan keluarga dan sekolah sangat diperlukan sehingga anak dapat tumbuh sehat sesuai dengan kemampuan, minat, dan bakatnya, serta memfasilitasi anak mendapatkan pelayanan kesehatan sesuai standar. Dukungan tersebut meliputi pengasuhan, pemeliharaan, pendidikan, dan perlindungan kepada anak.",
    articles: [
      {
        id: 1,
        title: "Nutrisi untuk Anak Usia Sekolah",
        description:
          "Kebutuhan nutrisi anak sekolah harus dipenuhi untuk mendukung aktivitas belajar dan bermain.",
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "9 Nov 2025",
        readTime: "5 menit",
      },
      {
        id: 2,
        title: "Pentingnya Aktivitas Fisik Anak",
        description:
          "Bermain dan berolahraga membantu perkembangan fisik dan sosial anak secara optimal.",
        image:
          "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "7 Nov 2025",
        readTime: "4 menit",
      },
      {
        id: 3,
        title: "Menjaga Kesehatan Gigi Anak",
        description:
          "Perawatan gigi sejak dini mencegah masalah kesehatan mulut di masa depan.",
        image:
          "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "5 Nov 2025",
        readTime: "6 menit",
      },
      {
        id: 4,
        title: "Imunisasi Lanjutan untuk Anak",
        description:
          "Imunisasi lanjutan penting untuk menjaga kekebalan tubuh anak dari penyakit.",
        image:
          "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "3 Nov 2025",
        readTime: "5 menit",
      },
    ],
    topics: [
      {
        id: 1,
        title: "Obesitas pada Anak",
        image:
          "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Anak-Anak",
      },
      {
        id: 2,
        title: "Kesehatan Mental Anak",
        image:
          "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Anak-Anak",
      },
      {
        id: 3,
        title: "Pola Tidur Sehat",
        image:
          "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Anak-Anak",
      },
      {
        id: 4,
        title: "Kesehatan Gigi Anak",
        image:
          "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Anak-Anak",
      },
      {
        id: 5,
        title: "Aktivitas Fisik Rutin",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Anak-Anak",
      },
      {
        id: 6,
        title: "Nutrisi Seimbang",
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Anak-Anak",
      },
    ],
  },
  remaja: {
    title: "Remaja (10-18 Tahun)",
    description:
      "Remaja merupakan kelompok usia 10 tahun sampai sebelum berusia 18 tahun. Upaya kesehatan remaja memiliki tujuan untuk mempersiapkan remaja menjadi orang dewasa yang sehat, cerdas, berkualitas, dan produktif dan berperan serta dalam menjaga, mempertahankan dan meningkatkan kesehatan dirinya.",
    description2:
      "Kesehatan remaja merupakan hal yang sangat penting diperhatikan karena pada masa ini remaja mengalami perubahan fisik, psikologis, dan sosial yang signifikan. Kementerian Kesehatan RI menekankan bahwa kesehatan remaja sangat dipengaruhi oleh pola makan yang sehat, aktivitas fisik yang teratur. Remaja yang sehat ditandai dengan berat badan, tinggi badan, dan indeks massa tubuh yang sesuai dengan usianya.",
    description3:
      "Upaya Kesehatan Remaja meliputi perkembangan positif, pencegahan kecelakaan, pencegahan kekerasan, kesehatan reproduksi, pencegahan dan pengendalian penyakit menular dan pencegahan penyakit tidak menular, gizi dan aktifitas fisik; kesehatan Jiwa; dan kesehatan remaja pada situasi krisis.",
    description4:
      "Remaja juga perlu memiliki kesehatan mental dan emosional yang baik, serta kemampuan untuk mengambil keputusan yang baik dan bertanggung jawab atas tindakan mereka. Pola makan yang sehat dan bergizi sangat penting bagi kesehatan remaja. Orangtua dan remaja sendiri perlu memperhatikan asupan makanan yang mengandung karbohidrat, protein, lemak, vitamin, dan mineral yang cukup untuk mendukung pertumbuhan dan perkembangan mereka.",
    description5:
      "Aktivitas fisik yang teratur juga perlu diperhatikan, seperti olahraga ringan atau berjalan-jalan, untuk membantu meningkatkan kesehatan jantung dan paru-paru, serta kekuatan otot dan tulang. Jika ada keluhan atau tanda-tanda tidak sehat pada remaja, segera konsultasikan ke dokter atau fasilitas kesehatan terdekat. Pencegahan dan perawatan yang tepat dapat membantu mempertahankan kesehatan remaja dan mendukung pertumbuhan dan perkembangan yang optimal.",
    description6:
      "Upaya Kesehatan Remaja selain ditujukan kepada remaja juga ditujukan kepada orang tua atau pengasuh untuk mendukung dan mewujudkan remaja yang sehat. Upaya Kesehatan Remaja harus melibatkan peran serta remaja dalam menjaga mempertahankan dan meningkatkan kesehatan dirinya.",
    description7:
      "Dukungan keluarga sangat diperlukan sehingga remaja dapat tumbuh sehat sesuai dengan kemampuan, minat, dan bakatnya; mencegah perkawinan remaja; dan memfasilitasi remaja mendapatkan pelayanan kesehatan sesuai standar. Dukungan Keluarga sebagaimana dimaksud dalam pengasuhan, pemeliharaan, Pendidikan, dan perlindungan kepada remaja.",
    articles: [
      {
        id: 1,
        title: "Pentingnya Aktivitas Fisik untuk Remaja",
        description:
          "Aktivitas fisik rutin membantu remaja tumbuh sehat, meningkatkan konsentrasi belajar, dan mengurangi stres.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "5 Nov 2025",
        readTime: "4 menit",
      },
      {
        id: 2,
        title: "Nutrisi Seimbang untuk Pertumbuhan Optimal",
        description:
          "Pola makan bergizi seimbang penting untuk mendukung pertumbuhan dan perkembangan remaja.",
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "3 Nov 2025",
        readTime: "5 menit",
      },
      {
        id: 3,
        title: "Kesehatan Mental Remaja di Era Digital",
        description:
          "Menjaga kesehatan mental remaja dengan manajemen stres dan penggunaan media sosial yang bijak.",
        image:
          "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "1 Nov 2025",
        readTime: "6 menit",
      },
      {
        id: 4,
        title: "Imunisasi dan Vaksinasi untuk Remaja",
        description:
          "Vaksinasi penting untuk melindungi remaja dari berbagai penyakit menular yang dapat dicegah.",
        image:
          "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "28 Okt 2025",
        readTime: "3 menit",
      },
    ],
    topics: [
      {
        id: 1,
        title: "Obesitas Remaja",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Remaja",
      },
      {
        id: 2,
        title: "Kesehatan Mental",
        image:
          "https://images.unsplash.com/photo-1573495627361-d9b87960b12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Remaja",
      },
      {
        id: 3,
        title: "Kesehatan Reproduksi",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Remaja",
      },
      {
        id: 4,
        title: "Gizi Seimbang Remaja",
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Remaja",
      },
      {
        id: 5,
        title: "Aktivitas Fisik Remaja",
        image:
          "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Remaja",
      },
      {
        id: 6,
        title: "Pola Hidup Sehat",
        image:
          "https://images.unsplash.com/photo-1519689680058-324335c77eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Remaja",
      },
    ],
  },
  dewasa: {
    title: "Dewasa (18-59 Tahun)",
    description:
      "Dewasa merupakan kelompok usia 18 tahun sampai sebelum berusia 60 tahun. Upaya kesehatan dewasa memiliki tujuan untuk mempersiapkan dewasa menjadi orang yang sehat, cerdas, berkualitas, dan produktif dan berperan serta dalam menjaga, mempertahankan dan meningkatkan kesehatan dirinya.",
    description2:
      "Kesehatan dewasa merupakan hal yang sangat penting diperhatikan karena pada masa ini dewasa mengalami perubahan fisik, psikologis, dan sosial yang signifikan. Kementerian Kesehatan RI menekankan bahwa kesehatan dewasa sangat dipengaruhi oleh pola makan yang sehat, aktivitas fisik yang teratur. Dewasa yang sehat ditandai dengan berat badan, tinggi badan, dan indeks massa tubuh yang sesuai dengan usianya.",
    description3:
      "Upaya Kesehatan Dewasa meliputi perkembangan positif, pencegahan kecelakaan, pencegahan kekerasan, kesehatan reproduksi, pencegahan dan pengendalian penyakit menular dan pencegahan penyakit tidak menular, gizi dan aktifitas fisik; kesehatan Jiwa; dan kesehatan dewasa pada situasi krisis.",
    description4:
      "Dewasa juga perlu memiliki kesehatan mental dan emosional yang baik, serta kemampuan untuk mengambil keputusan yang baik dan bertanggung jawab atas tindakan mereka. Pola makan yang sehat dan bergizi sangat penting bagi kesehatan dewasa. Orangtua dan dewasa sendiri perlu memperhatikan asupan makanan yang mengandung karbohidrat, protein, lemak, vitamin, dan mineral yang cukup untuk mendukung pertumbuhan dan perkembangan mereka.",
    description5:
      "Aktivitas fisik yang teratur juga perlu diperhatikan, seperti olahraga ringan atau berjalan-jalan, untuk membantu meningkatkan kesehatan jantung dan paru-paru, serta kekuatan otot dan tulang. Jika ada keluhan atau tanda-tanda tidak sehat pada dewasa, segera konsultasikan ke dokter atau fasilitas kesehatan terdekat. Pencegahan dan perawatan yang tepat dapat membantu mempertahankan kesehatan dewasa dan mendukung pertumbuhan dan perkembangan yang optimal.",
    description6:
      "Upaya Kesehatan Dewasa selain ditujukan kepada dewasa juga ditujukan kepada orang tua atau pengasuh untuk mendukung dan mewujudkan dewasa yang sehat. Upaya Kesehatan Dewasa harus melibatkan peran serta dewasa dalam menjaga mempertahankan dan meningkatkan kesehatan dirinya.",
    description7:
      "Dukungan keluarga sangat diperlukan sehingga dewasa dapat tumbuh sehat sesuai dengan kemampuan, minat, dan bakatnya; mencegah perkawinan dewasa; dan memfasilitasi dewasa mendapatkan pelayanan kesehatan sesuai standar. Dukungan Keluarga sebagaimana dimaksud dalam pengasuhan, pemeliharaan, Pendidikan, dan perlindungan kepada dewasa.",
    articles: [
      {
        id: 1,
        title: "Hipertensi dan Pencegahannya",
        description:
          "Tekanan darah tinggi dapat dicegah dengan pola hidup sehat dan pemeriksaan rutin.",
        image:
          "https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "10 Nov 2025",
        readTime: "5 menit",
      },
      {
        id: 2,
        title: "Diabetes Mellitus di Usia Produktif",
        description:
          "Deteksi dini dan pengelolaan diabetes yang tepat mencegah komplikasi jangka panjang.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "8 Nov 2025",
        readTime: "6 menit",
      },
      {
        id: 3,
        title: "Kesehatan Jantung untuk Dewasa",
        description:
          "Menjaga kesehatan jantung dengan olahraga teratur dan pola makan seimbang sangat penting.",
        image:
          "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "6 Nov 2025",
        readTime: "5 menit",
      },
      {
        id: 4,
        title: "Manajemen Stres di Tempat Kerja",
        description:
          "Stres kerja yang tidak dikelola dengan baik dapat berdampak pada kesehatan fisik dan mental.",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "4 Nov 2025",
        readTime: "4 menit",
      },
    ],
    topics: [
      {
        id: 1,
        title: "Hipertensi",
        image:
          "https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Dewasa",
      },
      {
        id: 2,
        title: "Diabetes Mellitus",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Dewasa",
      },
      {
        id: 3,
        title: "Kesehatan Jantung",
        image:
          "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Dewasa",
      },
    ],
  },
  lansia: {
    title: "Lansia (60+ Tahun)",
    description:
      "Lansia merupakan kelompok usia 60 tahun ke atas. Upaya kesehatan lansia memiliki tujuan untuk mempersiapkan lansia menjadi orang yang sehat, cerdas, berkualitas, dan produktif dan berperan serta dalam menjaga, mempertahankan dan meningkatkan kesehatan dirinya.",
    description2:
      "Kesehatan lansia merupakan hal yang sangat penting diperhatikan karena pada masa ini lansia mengalami perubahan fisik, psikologis, dan sosial yang signifikan. Kementerian Kesehatan RI menekankan bahwa kesehatan lansia sangat dipengaruhi oleh pola makan yang sehat, aktivitas fisik yang teratur. Lansia yang sehat ditandai dengan berat badan, tinggi badan, dan indeks massa tubuh yang sesuai dengan usianya.",
    description3:
      "Upaya Kesehatan Lansia meliputi perkembangan positif, pencegahan kecelakaan, pencegahan kekerasan, kesehatan reproduksi, pencegahan dan pengendalian penyakit menular dan pencegahan penyakit tidak menular, gizi dan aktifitas fisik; kesehatan Jiwa; dan kesehatan lansia pada situasi krisis.",
    description4:
      "Lansia juga perlu memiliki kesehatan mental dan emosional yang baik, serta kemampuan untuk mengambil keputusan yang baik dan bertanggung jawab atas tindakan mereka. Pola makan yang sehat dan bergizi sangat penting bagi kesehatan lansia. Orangtua dan lansia sendiri perlu memperhatikan asupan makanan yang mengandung karbohidrat, protein, lemak, vitamin, dan mineral yang cukup untuk mendukung pertumbuhan dan perkembangan mereka.",
    description5:
      "Aktivitas fisik yang teratur juga perlu diperhatikan, seperti olahraga ringan atau berjalan-jalan, untuk membantu meningkatkan kesehatan jantung dan paru-paru, serta kekuatan otot dan tulang. Jika ada keluhan atau tanda-tanda tidak sehat pada lansia, segera konsultasikan ke dokter atau fasilitas kesehatan terdekat. Pencegahan dan perawatan yang tepat dapat membantu mempertahankan kesehatan lansia dan mendukung pertumbuhan dan perkembangan yang optimal.",
    description6:
      "Upaya Kesehatan Lansia selain ditujukan kepada lansia juga ditujukan kepada orang tua atau pengasuh untuk mendukung dan mewujudkan lansia yang sehat. Upaya Kesehatan Lansia harus melibatkan peran serta lansia dalam menjaga mempertahankan dan meningkatkan kesehatan dirinya.",
    description7:
      "Dukungan keluarga sangat diperlukan sehingga lansia dapat tumbuh sehat sesuai dengan kemampuan, minat, dan bakatnya; mencegah perkawinan lansia; dan memfasilitasi lansia mendapatkan pelayanan kesehatan sesuai standar. Dukungan Keluarga sebagaimana dimaksud dalam pengasuhan, pemeliharaan, Pendidikan, dan perlindungan kepada lansia.",
    articles: [
      {
        id: 1,
        title: "Osteoporosis pada Lansia",
        description:
          "Pencegahan dan penanganan osteoporosis penting untuk mencegah patah tulang pada lansia.",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "10 Nov 2025",
        readTime: "5 menit",
      },
      {
        id: 2,
        title: "Demensia dan Pencegahannya",
        description:
          "Stimulasi kognitif dan pola hidup sehat dapat memperlambat penurunan fungsi kognitif.",
        image:
          "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "8 Nov 2025",
        readTime: "6 menit",
      },
      {
        id: 3,
        title: "Nutrisi untuk Lansia Sehat",
        description:
          "Kebutuhan nutrisi lansia berbeda dan perlu disesuaikan dengan kondisi kesehatan.",
        image:
          "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "6 Nov 2025",
        readTime: "5 menit",
      },
      {
        id: 4,
        title: "Aktivitas Fisik untuk Lansia",
        description:
          "Olahraga ringan teratur membantu menjaga mobilitas dan kesehatan jantung lansia.",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        date: "4 Nov 2025",
        readTime: "4 menit",
      },
    ],
    topics: [
      {
        id: 1,
        title: "Osteoporosis",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Lansia",
      },
      {
        id: 2,
        title: "Demensia",
        image:
          "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Lansia",
      },
      {
        id: 3,
        title: "Kesehatan Jantung Lansia",
        image:
          "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        category: "Lansia",
      },
    ],
  },
};

// Publications (sama untuk semua stage)
const publications = [
  {
    id: 1,
    title: "Buku Saku Kesehatan",
    type: "PDF",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    title: "Panduan Gizi Seimbang",
    type: "PDF",
    image:
      "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    title: "Leaflet Imunisasi",
    type: "PDF",
    image:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

// Diseases (sama untuk semua stage)
const diseases = [
  {
    id: 1,
    title: "ISPA (Infeksi Saluran Pernapasan Akut)",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    title: "Diare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    title: "Campak",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 4,
    title: "Demam Berdarah Dengue (DBD)",
    image:
      "https://images.unsplash.com/photo-1579154204845-5e8a6cc07087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 5,
    title: "Tuberkulosis (TBC)",
    image:
      "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 6,
    title: "Cacar Air",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

export default function SiklusHidupPage({
  onNavigateHome,
  initialStage = "remaja",
}: {
  onNavigateHome: () => void;
  initialStage?: string;
}) {
  const [selectedStage, setSelectedStage] = useState(initialStage);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentDiseaseIndex, setCurrentDiseaseIndex] = useState(0);

  const currentContent =  stageContent.remaja;
  const currentStageData = lifecycleStages.find(s => s.slug === selectedStage) || lifecycleStages[2];

  // === SEO DATA ===
  const baseUrl = "https://staging-ayo-sehat.vercel.app";
  const canonicalUrl = `${baseUrl}/page//siklus-hidup`;
  const pageTitle = `${currentStageData.name} (${currentStageData.age}) - Panduan Kesehatan | Ayo Sehat Kemenkes`;
  const pageDescription = `Informasi lengkap kesehatan untuk kelompok usia ${currentStageData.name}. Gizi, imunisasi, pencegahan penyakit, dan tips hidup sehat dari Kementerian Kesehatan RI.`;

  const ogImage = currentStageData.image.startsWith("http") ? currentStageData.image : `${baseUrl}${currentStageData.image}`;

  const breadcrumb = [
    { name: "Beranda", url: baseUrl },
    { name: "Siklus Hidup", url: `${baseUrl}/siklus-hidup` },
    { name: currentStageData.name, url: canonicalUrl },
  ];

  return (
    <>
      {/* === SEO & METADATA === */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Ayo Sehat Kemenkes" />
        <meta property="og:locale" content="id_ID" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: pageTitle,
          description: pageDescription,
          url: canonicalUrl,
          breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: breadcrumb.map((item, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: item.name,
              item: item.url,
            })),
          },
        })}
      </script>

      {/* === PAGE CONTENT === */}
      <div className="min-h-screen bg-white">
        <CustomBreadcrumb onNavigateHome={onNavigateHome} currentPage={`Siklus Hidup - ${currentStageData.name}`} />

        {/* Hero Section */}
        <div className="relative">
          <section className="relative bg-gradient-to-b from-white to-[#f8f9fa] pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -left-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-gray-100/40 blur-3xl" />
              <div className="absolute -top-40 right-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-gray-100/30 blur-3xl" />
            </div>

            <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 sm:mb-8 lg:mb-10">
                <h1 className="font-semibold text-[28px] sm:text-[36px] lg:text-[50px] text-[#18b3ab] mb-3 sm:mb-4">
                  Siklus Hidup Kesehatan
                </h1>
                <p className="text-[14px] sm:text-[16px] lg:text-[22px] text-neutral-600 max-w-[794px] leading-relaxed">
                  Pendampingan menjaga kesehatan sepanjang siklus kehidupan, dengan informasi khusus setiap tahap usia
                </p>
              </motion.div>
            </div>
          </section>

          {/* Lifecycle Cards - Overlap */}
          <div className="absolute left-0 right-0 top-[calc(100%-50px)] sm:top-[calc(100%-20px)] lg:top-[calc(100%-80px)] z-20 pointer-events-none">
            <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8">
              <div className="grid grid-cols-5 gap-2 sm:gap-4 lg:gap-6 xl:gap-[26px] items-end pointer-events-auto">
                {lifecycleStages.map((stage, index) => {
                  const isSelected = stage.slug === selectedStage;
                  return (
                    <motion.div
                      key={stage.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, scale: isSelected ? 1.05 : 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group cursor-pointer flex flex-col items-center"
                      onClick={() => setSelectedStage(stage.slug)}
                    >
                      <div className={`relative w-full aspect-square transition-all duration-500 ${isSelected ? "shadow-[0_10px_40px_rgba(24,179,171,0.5)] z-20" : "z-10"} group-hover:-translate-y-2 group-hover:scale-105`}>
                        <div className="absolute inset-0 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] overflow-hidden bg-[#18b3ab]">
                          <img
                            src={stage.image}
                            alt={`Ilustrasi kesehatan ${stage.name} usia ${stage.age} - Kemenkes RI`}
                            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                        <div className="absolute inset-0 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] border-2 border-transparent group-hover:border-[#d5dd23] transition-all duration-500" />
                        <div className={`absolute bottom-[-10px] sm:bottom-[-15px] lg:bottom-[-20px] xl:bottom-[-25px] left-1/2 -translate-x-1/2 bg-[#d5dd23] rounded-[8px] sm:rounded-[12px] lg:rounded-[16px] xl:rounded-[20px] h-[40px] sm:h-[55px] lg:h-[70px] xl:h-[84px] w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[80%] xl:max-w-[222px] flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-[#c5cd13] group-hover:shadow-[0_10px_30px_rgba(213,221,35,0.4)] group-hover:-translate-y-1 group-hover:scale-105 z-30 px-1 sm:px-2`}>
                          <p className="font-semibold text-[9px] sm:text-[12px] lg:text-[16px] xl:text-[23px] leading-tight text-[#383838] text-center transition-all duration-300 group-hover:scale-110">
                            {stage.name}
                          </p>
                          <p className="text-[7px] sm:text-[10px] lg:text-[12px] xl:text-[16px] leading-tight text-[#302e2e] text-center transition-all duration-300 group-hover:text-[#1a1a1a]">
                            {stage.age}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="relative bg-white pt-[140px] sm:pt-[230px] lg:pt-[380px] pb-8 sm:pb-10 lg:pb-12">
          <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] sm:gap-8 lg:gap-12">
              {/* LEFT: Main Content */}
              <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
                {/* Hero Image */}
                <div>
                  <div className="bg-gradient-to-br from-[#18b3ab] to-[#15a098] rounded-[15px] sm:rounded-[20px] overflow-hidden p-4 sm:p-6 lg:p-8 h-[250px] sm:h-[350px] lg:h-[500px] relative mb-6">
                    <img
                      src={currentStageData.image}
                      alt={`Panduan kesehatan untuk ${currentStageData.name} - Kemenkes RI`}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-90"
                      loading="lazy"
                    />
                    <div className="relative z-10">
                      <div className="bg-[#d5dd23] inline-block rounded-full px-4 py-1.5 mb-4">
                        <p className="font-medium text-[14px] text-[#212121]">{currentStageData.name}</p>
                      </div>
                    </div>
                  </div>

                  {/* Title & Age */}
                  <div className="mb-6">
                    <p className="text-[#6b7280] text-[13px] sm:text-[14px] mb-2">Kelompok Umur</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                      <h1 className="text-[#18b3ab] text-[24px] sm:text-[32px] lg:text-[40px]">{currentStageData.name}</h1>
                      <span className="text-[#6b7280] text-[18px] sm:text-[20px] lg:text-[24px]">•</span>
                      <p className="text-[#6b7280] text-[16px] sm:text-[18px] lg:text-[20px]">{currentStageData.age}</p>
                    </div>
                  </div>

                  {/* Tags + Share */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {["Penyakit Pernapasan", "Kardiovaskular", "Pencernaan", "Neoplasma"].map((tag, i) => (
                        <button
                          key={i}
                          className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[13px] font-medium rounded-full transition-colors ${
                            i === 1
                              ? "bg-[#18b3ab] text-white hover:bg-[#16a199]"
                              : "border border-[#18b3ab] text-[#18b3ab] hover:bg-[#18b3ab] hover:text-white"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button aria-label="Bagikan" className="w-9 h-9 rounded bg-[#18b3ab] text-white flex items-center justify-center hover:bg-[#16a199] transition-colors">
                        <Share2 size={16} />
                      </button>
                      {["Facebook", "Twitter", "WhatsApp", "Link"].map((platform, i) => (
                        <button
                          key={i}
                          aria-label={platform}
                          className="w-9 h-9 rounded bg-[#18b3ab] text-white flex items-center justify-center hover:bg-[#16a199] transition-colors"
                        >
                          {platform === "Link" ? (
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                          ) : (
                            <div className="w-4 h-4 bg-white/30 rounded" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="space-y-4 text-justify">
                    <p className="text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">
                      Ini adalah contoh paragraf deskripsi kesehatan untuk kelompok usia {currentStageData.name}. Informasi ini mencakup gizi, imunisasi, dan pencegahan penyakit.
                    </p>
                    <p className="text-[15px] lg:text-[16px] text-gray-700 leading-relaxed">
                      Kementerian Kesehatan RI menekankan pentingnya pola hidup sehat sejak dini untuk mendukung pertumbuhan optimal.
                    </p>
                  </div>
                </div>

                {/* Topik Kesehatan */}
                <div>
                  <h2 className="font-semibold text-[20px] sm:text-[24px] lg:text-[28px] text-[#18b3ab] mb-4 sm:mb-6">
                    Topik Kesehatan Terkait
                  </h2>
                  <div className="relative group/carousel">
                    <button
                      onClick={() => setCurrentTopicIndex(prev => Math.max(0, prev - 1))}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                      aria-label="Sebelumnya"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#18b3ab]" />
                    </button>
                    <button
                      onClick={() => setCurrentTopicIndex(prev => prev + 1)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                      aria-label="Berikutnya"
                    >
                      <ChevronRight className="w-6 h-6 text-[#18b3ab]" />
                    </button>
                    <div className="overflow-hidden">
                      <div
                        className="flex gap-4 sm:gap-6 transition-transform duration-500"
                        style={{ transform: `translateX(-${currentTopicIndex * (100 / 3)}%)` }}
                      >
                        {currentContent.topics.map((topic: any, i: number) => (
                          <motion.div key={i} className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                            <div className="h-[245px] rounded-[15px] overflow-hidden border border-[#d2d2d2] shadow-md hover:shadow-lg transition-all">
                              <div className="h-[151px] overflow-hidden">
                                <img src={topic.image} alt={topic.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                              </div>
                              <div className="h-[94px] flex items-center justify-center px-4 bg-white hover:bg-[#18b3ab] transition-colors">
                                <p className="text-[18px] font-medium text-center text-[#18b3ab] hover:text-white transition-colors">
                                  {topic.title}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Penyakit Terkait */}
                <div>
                  <h2 className="font-semibold text-[20px] sm:text-[24px] lg:text-[28px] text-[#18b3ab] mb-4 sm:mb-6">
                    Penyakit Terkait
                  </h2>
                  <div className="relative group/carousel">
                    <button
                      onClick={() => setCurrentDiseaseIndex(prev => Math.max(0, prev - 1))}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                      aria-label="Sebelumnya"
                    >
                      <ChevronLeft className="w-6 h-6 text-[#18b3ab]" />
                    </button>
                    <button
                      onClick={() => setCurrentDiseaseIndex(prev => prev + 1)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                      aria-label="Berikutnya"
                    >
                      <ChevronRight className="w-6 h-6 text-[#18b3ab]" />
                    </button>
                    <div className="overflow-hidden">
                      <div
                        className="flex gap-4 sm:gap-6 transition-transform duration-500"
                        style={{ transform: `translateX(-${currentDiseaseIndex * (100 / 3)}%)` }}
                      >
                        {diseases.map((disease, i) => (
                          <motion.div key={i} className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                            <div className="h-[245px] rounded-[15px] overflow-hidden border border-[#d2d2d2] shadow-md hover:shadow-lg transition-all">
                              <div className="h-[151px] overflow-hidden">
                                <img src={disease.image} alt={disease.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                              </div>
                              <div className="h-[94px] flex items-center justify-center px-4 bg-white hover:bg-[#18b3ab] transition-colors">
                                <p className="text-[18px] font-medium text-center text-[#18b3ab] hover:text-white transition-colors">
                                  {disease.title}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <RightSidebar
  className="lg:sticky lg:top-6 lg:self-start"
  showCalendar={true}
  showRelatedArticles={true}
  showPublications={true}
  relatedArticles={currentContent.articles || []}
  publications={publications} 
/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}