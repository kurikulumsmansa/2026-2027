/*
  DAFTAR FILE KURIKULUM
  ---------------------
  Untuk menambah file, salin satu baris { ... }, lalu ubah isinya:
    judul    : nama file yang tampil di website
    kategori : salah satu dari "KOSP", "CP & ATP", "Modul Ajar", "Kalender & Jadwal", "Penilaian", "P5"
    kelas    : "X", "XI", "XII", atau "Semua"
    link     : link Google Drive (atau nama file di folder "files", contoh "files/kosp.pdf")
  Jika link masih "#", file ditandai "Segera".
*/
const DOKUMEN = [
  { judul: "KOSP SMAN 1 Batam 2026/2027", kategori: "KOSP", kelas: "Semua", link: "#" },
  { judul: "Struktur Kurikulum & Alokasi Jam Pelajaran", kategori: "KOSP", kelas: "Semua", link: "#" },
  { judul: "Daftar Mata Pelajaran Pilihan", kategori: "KOSP", kelas: "XI", link: "#" },

  { judul: "Capaian Pembelajaran (CP) Fase E", kategori: "CP & ATP", kelas: "X", link: "#" },
  { judul: "Capaian Pembelajaran (CP) Fase F", kategori: "CP & ATP", kelas: "XI", link: "#" },
  { judul: "Alur Tujuan Pembelajaran (ATP) Kelas X", kategori: "CP & ATP", kelas: "X", link: "#" },
  { judul: "Alur Tujuan Pembelajaran (ATP) Kelas XI", kategori: "CP & ATP", kelas: "XI", link: "#" },
  { judul: "Alur Tujuan Pembelajaran (ATP) Kelas XII", kategori: "CP & ATP", kelas: "XII", link: "#" },

  { judul: "Format Modul Ajar", kategori: "Modul Ajar", kelas: "Semua", link: "#" },
  { judul: "Kumpulan Modul Ajar Kelas X", kategori: "Modul Ajar", kelas: "X", link: "#" },
  { judul: "Kumpulan Modul Ajar Kelas XI", kategori: "Modul Ajar", kelas: "XI", link: "#" },
  { judul: "Kumpulan Modul Ajar Kelas XII", kategori: "Modul Ajar", kelas: "XII", link: "#" },

  { judul: "Kalender Pendidikan 2026/2027", kategori: "Kalender & Jadwal", kelas: "Semua", link: "#" },
  { judul: "Program Tahunan (Prota)", kategori: "Kalender & Jadwal", kelas: "Semua", link: "#" },
  { judul: "Program Semester (Promes)", kategori: "Kalender & Jadwal", kelas: "Semua", link: "#" },
  { judul: "Jadwal Pelajaran Semester Ganjil", kategori: "Kalender & Jadwal", kelas: "Semua", link: "#" },

  { judul: "Pedoman Penilaian & Rapor", kategori: "Penilaian", kelas: "Semua", link: "#" },
  { judul: "Kriteria Ketercapaian Tujuan Pembelajaran (KKTP)", kategori: "Penilaian", kelas: "Semua", link: "#" },
  { judul: "Kisi-kisi Sumatif Akhir Semester", kategori: "Penilaian", kelas: "Semua", link: "#" },

  { judul: "Panduan Projek P5 2026/2027", kategori: "P5", kelas: "Semua", link: "#" },
  { judul: "Modul Projek P5 Kelas X", kategori: "P5", kelas: "X", link: "#" },
  { judul: "Modul Projek P5 Kelas XI", kategori: "P5", kelas: "XI", link: "#" },
];
