/*
  DAFTAR LINK KURIKULUM SMAN 1 BATAM 2026/2027
  --------------------------------------------
  Setiap kelompok punya "judul" dan daftar "link".
  Untuk menambah link, salin satu baris { ... } lalu ubah:
    nama : tulisan pada tombol
    url  : alamat link (Google Drive, Form, dll.)
    jenis: "file", "folder", "sheet", "form", atau "web" (menentukan ikon)
    utama: true  -> (opsional) tampil juga di kartu "Akses Cepat" halaman depan
*/
const KELOMPOK = [
  {
    judul: "TKA",
    link: [
      { nama: "Mata Pelajaran Pendukung TKA", jenis: "file",
        url: "https://drive.google.com/file/d/1SD_vu3yhc4tGm3XlYufqPesdIXrHb4gV/view?usp=sharing" },
    ],
  },
  {
    judul: "Pembelajaran",
    link: [
      { nama: "Informasi Guru Berhalangan Hadir di Kelas", utama: true, jenis: "form",
        url: "https://forms.gle/6PVC2JR79KttKtKh7" },
    ],
  },
  {
    judul: "Administrasi Pembelajaran",
    link: [
      { nama: "Rekap Pemantauan Murid HL, HJ dan HT", jenis: "folder",
        url: "https://drive.google.com/drive/folders/1Xn1c9BxztBVPwgwtzpPYmaVmCbhebkEC?usp=drive_link" },
      { nama: "Kalender Pendidikan SMAN 1 Batam 2026-2027", utama: true, jenis: "sheet",
        url: "https://docs.google.com/spreadsheets/d/1q_HcEny9GmdbBIBL9b-98GfPlJ5mQ3I0bKk86XOyujU/edit?usp=sharing" },
      { nama: "Absensi Kehadiran Murid 2026/2027", jenis: "folder",
        url: "https://drive.google.com/drive/folders/1Ruh1YqM15oiygMKG4LSBq-B4N35_jQqS?usp=sharing" },
    ],
  },
  {
    judul: "Administrasi Guru Wali",
    link: [
      { nama: "Jadwal Guru Wali Sem. Ganjil 26-27 XII HT", jenis: "file",
        url: "https://drive.google.com/file/d/1KWXnoMB_GIZKeqV3aDLf8hyxQtFeLf2t/view?usp=sharing" },
      { nama: "Jadwal Guru Wali Sem. Ganjil 26-27 XI HJ", jenis: "file",
        url: "https://drive.google.com/file/d/1WMa0La12DPBGk0QhuokychL6iqXa_Cnq/view?usp=sharing" },
      { nama: "Nama Guru Wali 26/27", utama: true, jenis: "sheet",
        url: "https://docs.google.com/spreadsheets/d/1IZmFolpJm2MSlNhTbgMJfQ_os2X2KOKCAHHayhe86Ng/edit?usp=sharing" },
      { nama: "Administrasi Guru Wali", jenis: "folder",
        url: "https://drive.google.com/drive/folders/1nBuAOQyaXfnq3Cp0UNEKbwUypyvOL5VN?usp=sharing" },
      { nama: "Upload Laporan Guru Wali per Semester", jenis: "folder",
        url: "https://drive.google.com/drive/folders/1EANK5hOaBoJVbaXUboUHV20sjD_TBPPZ?usp=sharing" },
    ],
  },
  {
    judul: "Administrasi Guru",
    link: [
      { nama: "Pengumpulan Perangkat Pembelajaran [Semester Ganjil] TP 2026/2027", utama: true, jenis: "form",
        url: "https://forms.gle/weH4Agne78ZA8b248" },
    ],
  },
  {
    judul: "Panduan Pembelajaran",
    link: [
      { nama: "Panduan Mata Pelajaran", jenis: "folder",
        url: "https://drive.google.com/drive/folders/11JXPNgoQ4w_diRzsaVwnZqfAt0ZF26-_?usp=sharing" },
      { nama: "Aturan Baru Kemendikdasmen", jenis: "folder",
        url: "https://drive.google.com/drive/folders/1cZrvL130WCazmoYCg7iLIcJQZOr7Bmy7?usp=sharing" },
      { nama: "CP Terbaru 26 Juni 2026 (No. 020 Kemendikdasmen)", jenis: "web",
        url: "https://kurikulum.kemendikdasmen.go.id/file/Salinan%20Kepka%20BKPDM%20No.%20020%20Tahun%202026%20tentang%20Perubahan%20atas%20Keputusan%20Kepala%20BSKAP%20Kemendikdasmen%20No.%20046_H_KR_2025.pdf" },
    ],
  },
];
