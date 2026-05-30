// ============ NAVIGATION ============
function showPage(id) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-links a")
    .forEach((a) => a.classList.remove("active"));
  document
    .querySelectorAll(".mobile-menu a")
    .forEach((a) => a.classList.remove("active"));
  document.getElementById("page-" + id).classList.add("active");
  document.getElementById("nav-" + id).classList.add("active");
  document.getElementById("mnav-" + id).classList.add("active");
  window.scrollTo(0, 0);
}

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const burger = document.getElementById("hamburger");
  menu.classList.toggle("open");
  burger.classList.toggle("open");
}

function closeMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
  document.getElementById("hamburger").classList.remove("open");
}

// Close menu on outside click
document.addEventListener("click", function (e) {
  const menu = document.getElementById("mobile-menu");
  const burger = document.getElementById("hamburger");
  if (
    menu.classList.contains("open") &&
    !menu.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    closeMenu();
  }
});

// ============ QUESTION BANK (50 SOAL) ============
const QUESTION_BANK = [
  // ── TINGKAT 1: SANGAT MUDAH ──
  {
    q: "Siapakah nama asli dari Sunan Ampel?",
    opts: ["Raden Paku", "Raden Rahmat", "Raden Said", "Raden Qasim"],
    ans: 1,
    exp: "Nama asli Sunan Ampel adalah Raden Rahmat. Gelar 'Sunan Ampel' diberikan karena beliau menetap dan berdakwah di kawasan Ampeldenta, Surabaya.",
  },
  {
    q: "Di kota manakah pusat dakwah dan makam Sunan Ampel berada?",
    opts: ["Demak", "Gresik", "Surabaya", "Kudus"],
    ans: 2,
    exp: "Sunan Ampel berdakwah dan mendirikan pesantren di kawasan Ampeldenta, Surabaya. Beliau dimakamkan di kompleks Masjid Agung Ampel, Surabaya.",
  },
  {
    q: "Sunan Ampel adalah salah satu tokoh penyebar Islam di Jawa yang tergabung dalam kelompok...",
    opts: ["Wali Songo", "Wali Pitu", "Kaum Muhajirin", "Waliullah Nusantara"],
    ans: 0,
    exp: "Sunan Ampel adalah salah satu anggota Wali Songo (Sembilan Wali), kelompok sembilan ulama penyebar Islam di Pulau Jawa yang sangat berpengaruh.",
  },
  {
    q: "Nama 'Ampel' pada gelar Sunan Ampel diambil dari nama daerah tempat tinggal dan pesantren beliau, yaitu...",
    opts: ["Ampelgading", "Ampeldenta", "Ampelwulung", "Ampelrejo"],
    ans: 1,
    exp: "Gelar Sunan Ampel berasal dari kawasan Ampeldenta di Surabaya, tempat beliau mendirikan pesantren dan pusat dakwahnya.",
  },
  {
    q: "Falsafah dakwah Sunan Ampel yang sangat terkenal untuk memperbaiki moral masyarakat adalah...",
    opts: ["Tepo Seliro", "Papat Kalima Pancer", "Moh Limo", "Molimoan"],
    ans: 2,
    exp: "Moh Limo adalah ajaran moral Sunan Ampel yang berisi lima larangan utama: tidak berjudi, tidak minum miras, tidak mencuri, tidak memakai narkoba, dan tidak berzina.",
  },
  {
    q: "Berapakah jumlah larangan dalam falsafah 'Moh Limo' yang diajarkan oleh Sunan Ampel?",
    opts: ["3", "4", "5", "6"],
    ans: 2,
    exp: "Moh Limo terdiri dari 5 larangan: Moh Main, Moh Ngombe, Moh Maling, Moh Madat, dan Moh Madon.",
  },
  {
    q: "Siapakah salah satu putra Sunan Ampel yang kemudian juga menjadi anggota Wali Songo dengan gelar Sunan Bonang?",
    opts: [
      "Raden Makdum Ibrahim",
      "Raden Qasim",
      "Ja'far Shadiq",
      "Raden Patah",
    ],
    ans: 0,
    exp: "Raden Makdum Ibrahim adalah putra sulung Sunan Ampel yang kemudian dikenal sebagai Sunan Bonang, salah satu Wali Songo.",
  },
  {
    q: "Selain Sunan Bonang, putra Sunan Ampel lainnya yang juga menjadi anggota Wali Songo adalah Sunan Drajat. Siapakah nama asli Sunan Drajat?",
    opts: ["Raden Paku", "Raden Qasim", "Raden Said", "Raden Umar"],
    ans: 1,
    exp: "Nama asli Sunan Drajat adalah Raden Qasim, putra kedua Sunan Ampel dari Dewi Condrowati.",
  },
  {
    q: "Sunan Ampel hidup dan berdakwah pada masa kejayaan kerajaan Hindu-Buddha terbesar di Jawa, yaitu...",
    opts: [
      "Kerajaan Singasari",
      "Kerajaan Kediri",
      "Kerajaan Majapahit",
      "Kerajaan Pajajaran",
    ],
    ans: 2,
    exp: "Sunan Ampel berdakwah pada era Kerajaan Majapahit. Hubungan kekerabatan beliau dengan keluarga kerajaan memudahkan akses dakwah ke kalangan istana.",
  },
  {
    q: "Masjid bersejarah yang didirikan oleh Sunan Ampel di Surabaya bernama...",
    opts: [
      "Masjid Agung Demak",
      "Masjid Ampel",
      "Masjid Menara Kudus",
      "Masjid Sunan Giri",
    ],
    ans: 1,
    exp: "Sunan Ampel mendirikan Masjid Ampel (Masjid Agung Sunan Ampel) di kawasan Ampeldenta, Surabaya, yang hingga kini masih aktif digunakan.",
  },
  // ── TINGKAT 2: MUDAH ──
  {
    q: "Dalam falsafah 'Moh Limo', arti dari kata 'Moh' itu sendiri adalah...",
    opts: ["Harus", "Tidak mau / Tidak boleh", "Suka", "Kebiasaan"],
    ans: 1,
    exp: "'Moh' dalam bahasa Jawa artinya 'tidak mau' atau 'menolak'. Jadi Moh Limo berarti menolak lima perbuatan tercela.",
  },
  {
    q: "Larangan pertama dalam Moh Limo adalah 'Moh Main'. Apa arti dari larangan tersebut?",
    opts: [
      "Tidak mau bermain-main waktu salat",
      "Tidak mau berjudi",
      "Tidak mau berbohong",
      "Tidak mau mencuri",
    ],
    ans: 1,
    exp: "Moh Main berarti tidak mau berjudi dalam segala bentuknya, karena judi merusak harta, mental, dan hubungan sosial.",
  },
  {
    q: "Arti dari larangan 'Moh Ngombe' dalam ajaran Sunan Ampel adalah...",
    opts: [
      "Tidak mau mabuk / meminum minuman keras",
      "Tidak mau makan berlebihan",
      "Tidak mau berzina",
      "Tidak mau memakai narkoba",
    ],
    ans: 0,
    exp: "Moh Ngombe berarti tidak mau meminum minuman keras (khamr). Dalam bahasa Jawa, 'ngombe' artinya minum, merujuk pada minuman yang memabukkan.",
  },
  {
    q: "Larangan 'Moh Maling' dalam prinsip Moh Limo memiliki arti...",
    opts: [
      "Tidak mau korupsi saja",
      "Tidak mau mencuri / mengambil hak orang lain",
      "Tidak mau berbuat curang saat berdagang",
      "Tidak mau memfitnah",
    ],
    ans: 1,
    exp: "Moh Maling berarti tidak mau mencuri atau mengambil hak orang lain. 'Maling' dalam bahasa Jawa berarti pencuri.",
  },
  {
    q: "Yang dimaksud dengan larangan 'Moh Madat' dalam falsafah Sunan Ampel adalah...",
    opts: [
      "Tidak mau berjudi uang",
      "Tidak mau mengisap candu / menggunakan narkoba",
      "Tidak mau bergunjing",
      "Tidak mau meninggalkan salat",
    ],
    ans: 1,
    exp: "Moh Madat berarti tidak mau mengonsumsi candu atau narkoba. 'Madat' adalah istilah Jawa untuk menghisap candu/opium.",
  },
  {
    q: "Larangan 'Moh Madon' dalam ajaran moral Sunan Ampel ditujukan untuk melarang perbuatan...",
    opts: [
      "Menyakiti hati ibu",
      "Berzina / mempermainkan perempuan",
      "Menimbun harta kekayaan",
      "Membunuh sesama manusia",
    ],
    ans: 1,
    exp: "Moh Madon berarti tidak mau berzina atau mempermainkan perempuan. 'Madon' dalam bahasa Jawa merujuk pada perbuatan asusila.",
  },
  {
    q: "Siapakah nama ayah dari Sunan Ampel, yang juga merupakan seorang ulama besar dari Champa?",
    opts: [
      "Syekh Jumadil Kubra",
      "Syekh Ibrahim Asmarakandi",
      "Maulana Malik Ibrahim",
      "Syekh Maulana Ishak",
    ],
    ans: 1,
    exp: "Ayah Sunan Ampel adalah Syekh Ibrahim Asmarakandi, ulama asal Samarkand yang telah lebih dahulu berdakwah di Champa dan Asia Tenggara.",
  },
  {
    q: "Sunan Ampel memiliki garis keturunan yang bersambung langsung kepada Nabi Muhammad SAW melalui jalur...",
    opts: [
      "Sayyidina Hasan",
      "Sayyidina Husein",
      "Abbas bin Abdul Muthalib",
      "Abu Bakar As-Siddiq",
    ],
    ans: 1,
    exp: "Nasab Sunan Ampel bersambung kepada Nabi Muhammad SAW melalui jalur Sayyidina Husein bin Ali, cucu Nabi.",
  },
  {
    q: "Istri pertama Sunan Ampel yang merupakan putri dari Adipati Tuban adalah...",
    opts: [
      "Dewi Murtasiyah",
      "Nyai Ageng Manila",
      "Dewi Murtasimah",
      "Nyai Gede Bungkul",
    ],
    ans: 0,
    exp: "Istri pertama Sunan Ampel adalah Dewi Murtasiyah, putri Adipati Tuban (Arya Teja), yang melahirkan Sunan Bonang dan Sunan Drajat.",
  },
  {
    q: "Sunan Ampel merupakan keponakan dari seorang permaisuri Raja Majapahit yang berasal dari Champa, yaitu...",
    opts: [
      "Ken Dedes",
      "Darawati (Dewi Dwarawati)",
      "Tribhuwana Tunggadewi",
      "Dyah Pitaloka",
    ],
    ans: 1,
    exp: "Darawati (Dewi Dwarawati) adalah permaisuri Prabu Brawijaya V dari Majapahit yang berasal dari Champa, dan merupakan bibi dari Sunan Ampel.",
  },
  // ── TINGKAT 3: SEDANG ──
  {
    q: "Siapakah murid utama Sunan Ampel yang kemudian mendirikan Kesultanan Demak, kerajaan Islam pertama di Jawa?",
    opts: ["Raden Patah", "Pati Unus", "Sultan Trenggono", "Sunan Kudus"],
    ans: 0,
    exp: "Raden Patah adalah murid Sunan Ampel yang atas bimbingan gurunya mendirikan Kesultanan Demak sekitar tahun 1475 M.",
  },
  {
    q: "Sunan Giri (Raden Paku) merupakan salah satu murid cerdas Sunan Ampel. Sebelum berdakwah mandiri, Raden Paku diutus Sunan Ampel untuk belajar ke...",
    opts: [
      "Gujarat, India",
      "Pasai, Sumatra",
      "Hadramaut, Yaman",
      "Makkah, Arab Saudi",
    ],
    ans: 1,
    exp: "Sunan Ampel mengutus Raden Paku (Sunan Giri) untuk mendalami ilmu agama di Samudra Pasai, Aceh, pusat pendidikan Islam di Asia Tenggara kala itu.",
  },
  {
    q: "Siapakah tokoh Wali Songo yang merupakan menantu Sunan Ampel karena menikahi putrinya yang bernama Dewi Murtasiyah?",
    opts: ["Sunan Kalijaga", "Sunan Giri", "Sunan Gunung Jati", "Sunan Kudus"],
    ans: 1,
    exp: "Sunan Giri (Raden Paku) menikahi Dewi Murtasiyah, putri Sunan Ampel, sehingga beliau menjadi menantu sekaligus murid Sunan Ampel.",
  },
  {
    q: "Selain Raden Patah, siapakah putra dari Prabu Brawijaya yang ikut berguru kepada Sunan Ampel di Ampeldenta?",
    opts: [
      "Raden Kusen (Arya Dilah)",
      "Arya Damar",
      "Gajah Mada",
      "Hayam Wuruk",
    ],
    ans: 0,
    exp: "Raden Kusen, putra Prabu Brawijaya V, juga berguru kepada Sunan Ampel di Ampeldenta dan menjadi salah satu tokoh penting masa itu.",
  },
  {
    q: "Metode dakwah Sunan Ampel sangat menekankan pada pendekatan...",
    opts: [
      "Politik dan militer secara frontal",
      "Pendidikan (pesantren) dan pembauran kultural",
      "Perdebatan teologis terbuka",
      "Isolasi diri dari masyarakat Hindu-Buddha",
    ],
    ans: 1,
    exp: "Sunan Ampel menggunakan pendekatan pendidikan melalui pesantren dan pembauran budaya (akulturasi), sehingga Islam diterima masyarakat secara damai.",
  },
  {
    q: "Dalam pembangunan Masjid Agung Demak, Sunan Ampel ikut menyumbang pemikiran. Ciri khas tiang masjid tersebut dibuat dari pecahan kayu yang disebut...",
    opts: ["Saka Guru", "Saka Tatal", "Tiang Pancang", "Kayu Jati Utuh"],
    ans: 1,
    exp: "Saka Tatal adalah tiang masjid yang terbuat dari potongan-potongan kayu kecil yang disatukan, merupakan karya teknik Sunan Kalijaga atas petunjuk para wali.",
  },
  {
    q: "Siapakah nama ibu kandung dari Sunan Ampel?",
    opts: [
      "Dewi Sekardadu",
      "Candrawulan (Putri Raja Champa)",
      "Dewi Retno Dumilah",
      "Nyai Subang Larang",
    ],
    ans: 1,
    exp: "Ibu Sunan Ampel adalah Dewi Candrawulan (Candrawati), putri Raja Champa, yang menjadikan Sunan Ampel memiliki ikatan kekerabatan dengan keluarga kerajaan Majapahit.",
  },
  {
    q: "Setelah Kesultanan Demak berdiri, Sunan Ampel bertindak sebagai...",
    opts: [
      "Sultan Pertama",
      "Penasihat Utama (Mufti) Kesultanan",
      "Panglima Perang Utama",
      "Hakim Agung (Qadhi)",
    ],
    ans: 1,
    exp: "Sunan Ampel berperan sebagai penasihat utama dan mufti Kesultanan Demak, memberikan legitimasi agama bagi pemerintahan kerajaan Islam pertama di Jawa.",
  },
  {
    q: "Salah satu murid Sunan Ampel yang awalnya merupakan seorang perampok namun bertobat dan menjadi wali terkenal adalah...",
    opts: [
      "Raden Said (Sunan Kalijaga)",
      "Raden Ja'far Shadiq",
      "Syarif Hidayatullah",
      "Malik Ibrahim",
    ],
    ans: 0,
    exp: "Raden Said yang kemudian bergelar Sunan Kalijaga awalnya dikenal sebagai perampok, namun bertobat setelah berguru kepada Sunan Bonang, murid Sunan Ampel.",
  },
  {
    q: "Mengapa Raja Majapahit memberikan tanah Ampeldenta kepada Raden Rahmat?",
    opts: [
      "Karena kalah perang",
      "Kagum atas budi pekerti beliau dan ingin mendidik moral bangsawan",
      "Sebagai hadiah pernikahan",
      "Karena Raden Rahmat membayar pajak tinggi",
    ],
    ans: 1,
    exp: "Prabu Kertawijaya memberikan tanah Ampeldenta kepada Raden Rahmat karena kagum dengan akhlak dan keilmuan beliau, serta berharap beliau mendidik masyarakat Jawa.",
  },
  // ── TINGKAT 4: SULIT ──
  {
    q: "Dari wilayah manakah asal usul Kerajaan Champa (tanah kelahiran Sunan Ampel) jika dikaitkan dengan peta modern?",
    opts: [
      "Kamboja / Vietnam Selatan",
      "Malaysia Barat",
      "Thailand Selatan",
      "India Barat",
    ],
    ans: 0,
    exp: "Kerajaan Champa berlokasi di wilayah yang kini menjadi bagian dari Vietnam Selatan (sekitar daerah Phan Rang-Tháp Chàm hingga Hội An).",
  },
  {
    q: "Sebelum menetap di Surabaya, rombongan Raden Rahmat pertama kali mendarat di pelabuhan Jawa di wilayah...",
    opts: ["Sunda Kelapa", "Tuban", "Jepara", "Gresik"],
    ans: 1,
    exp: "Raden Rahmat pertama kali mendarat di Tuban, Jawa Timur, sebelum melanjutkan perjalanan ke ibu kota Majapahit dan akhirnya menetap di Surabaya.",
  },
  {
    q: "Siapakah nama paman Sunan Ampel yang menetap di Gresik dan dikenal sebagai salah satu Wali Songo tertua?",
    opts: [
      "Maulana Malik Ibrahim (Sunan Gresik)",
      "Sunan Kudus",
      "Sunan Muria",
      "Syekh Siti Jenar",
    ],
    ans: 0,
    exp: "Maulana Malik Ibrahim (Sunan Gresik) adalah paman dari Sunan Ampel yang lebih dahulu berdakwah di Gresik dan dianggap sebagai salah satu Wali Songo tertua.",
  },
  {
    q: "Putri Sunan Ampel bernama Dewi Murtasimah dinikahkan dengan penguasa pertama Demak, yaitu...",
    opts: ["Pati Unus", "Raden Patah", "Sultan Trenggono", "Sunan Kudus"],
    ans: 1,
    exp: "Dewi Murtasimah, putri Sunan Ampel, dinikahkan dengan Raden Patah yang kemudian menjadi Sultan Demak I, mempererat hubungan spiritual dan politik.",
  },
  {
    q: "Siapakah nama saudara kandung laki-laki Sunan Ampel yang ikut serta dalam perjalanan dakwah dari Champa ke tanah Jawa?",
    opts: [
      "Sayyid Ali Murtadho (Raden Santri)",
      "Syekh Bela Belu",
      "Raden Burereh",
      "Syekh Mahgribi",
    ],
    ans: 0,
    exp: "Sayyid Ali Murtadho yang dikenal sebagai Raden Santri adalah saudara kandung Sunan Ampel yang bersama-sama melakukan perjalanan dakwah dari Champa ke Jawa.",
  },
  {
    q: "Pesantren Ampeldenta yang didirikan Sunan Ampel dianggap penting secara historis karena menjadi...",
    opts: [
      "Lembaga pendidikan formal pertama berstandar internasional",
      "Model pertama lembaga pendidikan pesantren di tanah Jawa",
      "Markas militer untuk meruntuhkan Majapahit",
      "Tempat penyimpanan kitab Hindu kuno",
    ],
    ans: 1,
    exp: "Pesantren Ampeldenta dianggap sebagai model pertama sistem pendidikan pesantren di Jawa, yang kemudian menjadi sistem pendidikan Islam khas Indonesia.",
  },
  {
    q: "Ketika terjadi perbedaan pandangan di antara para wali mengenai tradisi lokal Jawa, Sunan Ampel berada pada posisi...",
    opts: [
      "Ingin menghapus total seluruh tradisi lokal",
      "Berhati-hati, menyerap tradisi lokal secara perlahan dengan nilai Islam murni",
      "Membiarkan tradisi lokal tanpa perlu diubah",
      "Menolak berdakwah kepada masyarakat abangan",
    ],
    ans: 1,
    exp: "Sunan Ampel dikenal sebagai tokoh yang berhati-hati dalam menyikapi tradisi lokal—beliau mengintegrasikan nilai Islam secara perlahan tanpa memaksakan perubahan drastis.",
  },
  {
    q: "Siapakah nama tokoh legendaris murid Sunan Ampel yang terkenal karena diceritakan selalu hidup kembali setelah dikubur?",
    opts: [
      "Mbah Sholeh",
      "Mbah Sonhaji (Mbah Bolong)",
      "Ki Ageng Pengging",
      "Syekh Subakir",
    ],
    ans: 0,
    exp: "Mbah Sholeh adalah murid setia Sunan Ampel yang legendaris karena dikisahkan meninggal dan dikubur berkali-kali namun selalu hidup kembali. Makamnya berjumlah 9 di sekitar Masjid Ampel.",
  },
  {
    q: "Salah satu murid Sunan Ampel yang terkenal memiliki karamah menentukan arah kiblat Masjid Ampel hanya dengan melihat melalui lubang dinding adalah...",
    opts: [
      "Mbah Sholeh",
      "Mbah Sonhaji (Mbah Bolong)",
      "Sunan Kalijaga",
      "Raden Patah",
    ],
    ans: 1,
    exp: "Mbah Sonhaji yang dijuluki 'Mbah Bolong' dikisahkan memiliki karamah dapat melihat Ka'bah melalui lubang di dinding untuk menentukan arah kiblat yang tepat.",
  },
  {
    q: "Tahun berapakah Sunan Ampel diperkirakan wafat menurut sebagian besar catatan sejarah?",
    opts: [
      "Sekitar 1400 M",
      "Sekitar 1478 M / 1481 M",
      "Sekitar 1500 M",
      "Sekitar 1521 M",
    ],
    ans: 1,
    exp: "Sunan Ampel diperkirakan wafat sekitar tahun 1478 M atau 1481 M. Tanggal pastinya masih diperdebatkan para sejarawan karena minimnya sumber tertulis dari era tersebut.",
  },
  // ── TINGKAT 5: SANGAT SULIT ──
  {
    q: "Dalam teks Babad Tanah Jawi, Sunan Ampel dikisahkan menolak ajakan muridnya untuk melakukan pemberontakan terhadap Majapahit. Alasan utama beliau adalah...",
    opts: [
      "Pasukan Islam belum cukup kuat",
      "Menghormati hubungan kekerabatan dan kebaikan Prabu Brawijaya",
      "Larangan dari Sultan Turki Utsmani",
      "Khawatir sanksi ekonomi dari pelabuhan internasional",
    ],
    ans: 1,
    exp: "Sunan Ampel menolak pemberontakan karena menghormati hubungan kekerabatan dan rasa terima kasih atas pemberian tanah Ampeldenta oleh Prabu Brawijaya—mencerminkan akhlak mulia dan strategi dakwah damai beliau.",
  },
  {
    q: "Silsilah Sunan Ampel dari Sayyidina Husein bersambung melalui salah satu imam besar yang bernama...",
    opts: [
      "Imam Ja'far ash-Shadiq",
      "Imam Ali al-Uraidhi",
      "Imam Hassan al-Basri",
      "Imam Syafii",
    ],
    ans: 1,
    exp: "Silsilah Sunan Ampel dari Husain bin Ali bersambung melalui Imam Ali al-Uraidhi, salah satu keturunan Imam Ali Zainal Abidin yang kemudian menurunkan ulama-ulama besar di Hadramaut.",
  },
  {
    q: "Keluarga besar Sunan Ampel dalam historiografi Islam disebut sebagai bagian dari jaringan ulama internasional...",
    opts: ["Alawiyyin / Ba'Alawi", "Fatimiyah", "Abbasiyah", "Seljuk"],
    ans: 0,
    exp: "Sunan Ampel dan keluarganya termasuk dalam klan Alawiyyin atau Ba'Alawi, yaitu keturunan Nabi Muhammad SAW melalui jalur Husain yang banyak berdakwah di Asia Tenggara.",
  },
  {
    q: "Sebelum menetap di Ampel, Raden Rahmat sempat tinggal beberapa tahun di Palembang untuk berkoordinasi dengan penguasa lokal bernama...",
    opts: [
      "Arya Damar (Suryadilaga)",
      "Pangeran Jayakarta",
      "Sultan Mahmud Badaruddin",
      "Pati Unus",
    ],
    ans: 0,
    exp: "Raden Rahmat sempat singgah di Palembang dan berinteraksi dengan Arya Damar (Suryadilaga), penguasa Palembang, dalam perjalanannya menuju Jawa.",
  },
  {
    q: "Sunan Ampel mengajarkan fikih dengan mengikuti mazhab yang dianut mayoritas Wali Songo, yaitu Mazhab...",
    opts: ["Hanafi", "Maliki", "Syafii", "Hanbali"],
    ans: 2,
    exp: "Sunan Ampel dan mayoritas Wali Songo mengamalkan dan mengajarkan fikih berdasarkan Mazhab Syafii, yang hingga kini menjadi mazhab dominan di Indonesia dan Asia Tenggara.",
  },
  {
    q: "Nama 'Asmarakandi' dari ayah Sunan Ampel merupakan pelafalan orang Jawa dari nama kota asal di Asia Tengah, yaitu...",
    opts: [
      "Samarkand (Uzbekistan)",
      "Ashgabat (Turkmenistan)",
      "Isfahan (Iran)",
      "Kandahar (Afganistan)",
    ],
    ans: 0,
    exp: "Nama 'Asmarakandi' berasal dari kata Samarkand, kota di Uzbekistan. Artinya Ibrahim Asmarakandi adalah Ibrahim dari Samarkand, menandakan asal-usul beliau dari Asia Tengah.",
  },
  {
    q: "Setelah Sunan Ampel wafat, siapakah tokoh Wali Songo yang ditunjuk menggantikan posisi beliau sebagai pemimpin dewan Wali Songo?",
    opts: ["Sunan Kalijaga", "Sunan Giri", "Sunan Kudus", "Sunan Bonang"],
    ans: 1,
    exp: "Sunan Giri menggantikan Sunan Ampel sebagai pemimpin dan koordinator Wali Songo setelah wafatnya Sunan Ampel, berkat keilmuan dan pengaruhnya yang besar di Jawa.",
  },
  {
    q: "Salah satu putri Sunan Ampel bernama Dewi Khadijah dinikahkan dengan seorang ulama yang kemudian dikenal sebagai...",
    opts: [
      "Sunan Gunung Jati (Syarif Hidayatullah)",
      "Sunan Kalijaga",
      "Sunan Kudus",
      "Sunan Muria",
    ],
    ans: 0,
    exp: "Dewi Khadijah, putri Sunan Ampel, menikah dengan Syarif Hidayatullah yang kemudian bergelar Sunan Gunung Jati, tokoh penyebar Islam di Jawa Barat dan Cirebon.",
  },
  {
    q: "Berdasarkan analisis kronogram kuno, kepindahan Raden Rahmat dari Champa ke Jawa terjadi setelah runtuhnya ibu kota Champa akibat serangan kerajaan...",
    opts: [
      "Vijaya / Annam (Vietnam)",
      "Ayutthaya (Thailand)",
      "Khmer (Kamboja)",
      "Singasari (Jawa)",
    ],
    ans: 0,
    exp: "Kerajaan Champa mengalami kemunduran akibat serangan berulang dari Kerajaan Dai Viet (Vietnam/Annam), memaksa banyak bangsawan Champa termasuk keluarga Sunan Ampel bermigrasi.",
  },
  {
    q: "Falsafah 'Moh Limo' milik Sunan Ampel dalam ilmu ushul fikih merupakan bentuk penerapan dari metode...",
    opts: [
      "Sadd adz-Dzari'ah (Menutup jalan menuju kerusakan)",
      "Istihsan (Beralih ke hukum yang lebih baik)",
      "Urf Shahih (Adat yang dibenarkan)",
      "Ijmak Sukuti",
    ],
    ans: 0,
    exp: "Moh Limo merupakan penerapan konsep Sadd adz-Dzari'ah, yaitu menutup segala jalan yang dapat menuju kemaksiatan dan kerusakan sosial, sebagai langkah preventif dalam hukum Islam.",
  },
];

// ============ QUIZ STATE ============
let selectedCount = 0;
let questions = [];
let currentQ = 0;
let score = 0;
let answered = false;

// Fisher-Yates shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function selectCount(n) {
  selectedCount = n;
  document
    .querySelectorAll(".count-btn")
    .forEach((b) => b.classList.remove("selected"));
  event.target.closest(".count-btn").classList.add("selected");
  document.getElementById("selected-info").textContent = n + " soal dipilih";
  const btn = document.getElementById("start-btn");
  btn.disabled = false;
  btn.style.opacity = "1";
  btn.style.cursor = "pointer";
}

function startQuiz() {
  questions = shuffle(QUESTION_BANK).slice(0, selectedCount);
  currentQ = 0;
  score = 0;
  document.getElementById("quiz-setup").style.display = "none";
  document.getElementById("quiz-active").style.display = "block";
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQ];
  const total = questions.length;

  document.getElementById("progress-fill").style.width =
    (currentQ / total) * 100 + "%";
  document.getElementById("quiz-qnum").textContent =
    "Soal " + (currentQ + 1) + " dari " + total;
  document.getElementById("quiz-score-live").textContent = "Skor: " + score;
  document.getElementById("quiz-question").textContent = q.q;
  document.getElementById("quiz-explanation").classList.remove("show");
  document.getElementById("next-btn").style.display = "none";
  answered = false;

  const letters = ["A", "B", "C", "D"];
  const optsEl = document.getElementById("quiz-options");
  optsEl.innerHTML = "";

  q.opts.forEach(function (opt, i) {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.innerHTML =
      '<span class="option-letter">' + letters[i] + "</span> " + opt;
    btn.onclick = function () {
      selectAnswer(i);
    };
    optsEl.appendChild(btn);
  });
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;

  const q = questions[currentQ];
  const opts = document.querySelectorAll(".quiz-option");

  opts.forEach(function (o) {
    o.disabled = true;
  });

  if (idx === q.ans) {
    score++;
    opts[idx].classList.add("correct");
  } else {
    opts[idx].classList.add("wrong");
    opts[q.ans].classList.add("missed");
  }

  document.getElementById("quiz-score-live").textContent = "Skor: " + score;

  const exp = document.getElementById("quiz-explanation");
  exp.innerHTML = "<strong>Penjelasan:</strong> " + q.exp;
  exp.classList.add("show");

  const nextBtn = document.getElementById("next-btn");
  nextBtn.style.display = "block";
  nextBtn.textContent =
    currentQ + 1 < questions.length ? "Soal Berikutnya →" : "Lihat Hasil →";
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult() {
  document.getElementById("quiz-active").style.display = "none";
  document.getElementById("quiz-result").style.display = "block";

  const total = questions.length;
  const pct = Math.round((score / total) * 100);

  document.getElementById("res-score").textContent = score;
  document.getElementById("res-correct").textContent = score;
  document.getElementById("res-wrong").textContent = total - score;
  document.getElementById("res-pct").textContent = pct + "%";

  var title, msg;
  if (pct >= 90) {
    title = "Māshā Allāh! Luar Biasa!";
    msg =
      "Pengetahuan Anda tentang Sunan Ampel sangat mendalam. Anda layak disebut pecinta sejarah Islam Nusantara!";
  } else if (pct >= 75) {
    title = "Alhamdulillah! Sangat Baik!";
    msg =
      "Pemahaman Anda tentang Sunan Ampel sangat baik. Terus perdalam pengetahuan Islam Nusantara!";
  } else if (pct >= 60) {
    title = "Cukup Baik!";
    msg =
      "Anda memiliki pengetahuan dasar yang cukup. Pelajari lebih lanjut tentang warisan dakwah Sunan Ampel!";
  } else if (pct >= 40) {
    title = "Perlu Belajar Lagi";
    msg =
      "Masih banyak yang perlu dipelajari. Kunjungi halaman Profil dan Sejarah untuk belajar lebih dalam!";
  } else {
    title = "Tetap Semangat!";
    msg =
      "Setiap perjalanan ilmu dimulai dari langkah pertama. Pelajari materi terlebih dahulu lalu coba lagi!";
  }

  document.getElementById("res-title").textContent = title;
  document.getElementById("res-msg").textContent = msg;
}

function restartQuiz() {
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-setup").style.display = "block";
  document.querySelectorAll(".count-btn").forEach(function (b) {
    b.classList.remove("selected");
  });
  var btn = document.getElementById("start-btn");
  btn.disabled = true;
  btn.style.opacity = "0.4";
  btn.style.cursor = "not-allowed";
  document.getElementById("selected-info").textContent =
    "Belum memilih jumlah soal";
  selectedCount = 0;
  questions = [];
  currentQ = 0;
  score = 0;
}

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
