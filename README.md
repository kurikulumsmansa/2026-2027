# Kurikulum SMAN 1 Batam 2026/2027

Papan informasi kurikulum untuk Bapak/Ibu guru SMAN 1 Batam, TP 2026/2027.

Alamat website: https://kurikulumsmansa.github.io/2026-2027/

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
