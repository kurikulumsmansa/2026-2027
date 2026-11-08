# Kurikulum SMAN 1 Batam 2026/2027

Papan informasi kurikulum untuk Bapak/Ibu guru SMAN 1 Batam, TP 2026/2027.

Alamat website: https://kurikulumsmansa.github.io/2026-2027/

## Susunan website

Menu kiri adalah navigasi utama. Setiap menu membuka satu halaman sendiri:

- **Beranda** (`#beranda`): banner, tombol besar ke setiap menu, dan dokumen yang sering dibuka
- **Kalender Pendidikan** (`#kalender`)
- **Daftar Guru** (`#guru`): tabel No, Nama Guru, Mata Pelajaran, Kelas yang Diajar
- **Dokumen & Layanan** (`#dokumen`): semua link dari `links.js`

## Cara menambah atau mengganti link

1. Buka file `links.js` di GitHub, lalu klik ikon pensil (Edit).
2. Setiap baris `{ nama: ..., jenis: ..., url: ... }` adalah satu tombol.
   - `nama`  : tulisan pada tombol
   - `jenis` : `file`, `folder`, `sheet`, `form`, atau `web` (menentukan warna ikon)
   - `utama: true` (opsional): tampil juga di kartu "Akses Cepat" di halaman depan
   - `url`   : link Google Drive / Form / web
3. Untuk menambah tombol, salin satu baris lalu ubah isinya. Untuk kelompok baru, salin satu blok `{ judul: ..., link: [ ... ] }`.
4. Klik **Commit changes**. Website diperbarui otomatis dalam 1–2 menit.

## Kalender Pendidikan

Kalender di halaman depan membaca data **langsung dari Google Sheets** (tab *Data Harian*
pada file *Kalender_Pendidikan_SMAN_1_Batam_2026-2027*). Cukup ubah kolom **Jenis** atau
**Keterangan** di sheet, kalender, Rekap, dan Minggu di website ikut berubah.

Jika sheet tidak bisa dibaca (misalnya akses sheet diubah jadi privat), website memakai
salinan di file `kalender-data.js`. Tab *Keterangan* (agenda, peringatan, catatan) juga diambil dari file itu.

## Guru & Pembagian Mengajar

Data guru ada di file `guru-data.js`. Setiap baris: `["Nama Guru", "Mata Pelajaran", "Kelas Diajar"]`,
contoh kelas: `"XI HJ 1–2, 5–6; XII HT 1–3"`. Mapel tambahan untuk guru yang sama ditulis di bagian `tambahan`.

## Panduan & Aturan (menu "Panduan & Aturan")

Daftar file ada di `panduan-data.js`: `[judul, keterangan, id file Google Drive, ukuran MB]`. File tetap disimpan di Google Drive kurikulum (folder PANDUAN PEMBELAJARAN), website hanya menautkan. Pastikan file/folder dibagikan ke guru (akun sekolah atau "siapa saja yang memiliki link").

## Perangkat Ajar (menu "Perangkat Ajar")

Halaman `#perangkat` di `index.html`: tombol ke Google Form pengumpulan perangkat (https://forms.gle/o3dXfyYEagAbt6bk9) dan hitung mundur ke batas akhir (atribut `data-hitung` / `data-hitung-besar`, tanggal 2026-11-14). Ganti link dan tanggal di sana untuk semester berikutnya.

## ASAS-BK (menu "ASAS-BK Ganjil")

Jadwal ada di file `asas.js` (daftar `ASAS_JADWAL`), status "Selesai / Sedang berlangsung / x hari lagi" dihitung otomatis.
Teks ketentuan dan link Google Form/LMS ada di `index.html` bagian `<!-- ===== ASAS-BK ===== -->`.
Template kisi-kisi & kartu soal (Excel, 3 sheet): `files/Kisi-Kisi-dan-Kartu-Soal-ASAS-BK.xlsx`.
Panduan prompt AI utama (100 soal PGS, 8 langkah) ada di bagian `<!-- Panduan prompt AI -->`; file prompt: `files/Prompt-100-soal-PGS.docx`. Di bawahnya ada kotak tambahan (bisa dibuka-tutup) `#promptTKA` untuk prompt soal bentuk TKA (PGS, MCMA, PGK): `files/Prompt-soal-PGS-MCMA-PGK.docx`.

## Data Murid (menu "Data Murid")

Data ada di `murid-data.js`, diambil dari Google Sheet daftar murid (sheet HL, HJ, HT).
- `update`: tanggal update terbaru (format `2026-11-01`).
- `kelas`: satu kelas = satu blok teks, satu murid per baris: `L|Nama|NIS|NISN|I` (L/P, nama, NIS, NISN, kode agama: I Islam, K Kristen, C Katolik, B Buddha, H Hindu). Kolom yang belum ada dikosongkan.
- `info`: keterangan tambahan per kelas (wali kelas / paket).
Rekap jumlah murid dihitung otomatis. Tabel menampilkan nama, NIS, NISN, L/P, dan agama; judul kolom bisa diklik untuk mengurutkan.
Setelah mengubah data, naikkan angka `?v=` di `index.html`.

## Halaman layanan (v34)
- **Jadwal Pelajaran** (`#jadwal`): PDF jadwal per kelas X, XI, XII (versi murid, bukan versi guru).
- **Formulir Guru** (`#formulir`): 3 tombol besar: perangkat pembelajaran, guru berhalangan hadir, pelaporan BDR.
- **Guru Wali** (`#guruwali`): jadwal guru wali ganjil, 7 format administrasi (unduh Word lewat `export?format=docx`), folder unggah laporan.
- **Asesmen** (`#asesmen`): STS Ganjil (format nilai, input nilai, SOP rapor) dan TKA / pemantapan TKA.
- **KSP 2027** (`#ksp`): dokumen KSP untuk dibaca guru.
Semua tautan ke Google Drive; pastikan berkas dibagikan "Siapa saja yang memiliki link".
