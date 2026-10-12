# Kedai Kopi Ruang Atas — Coffee & Rooftop Tenjo

Website landing page resmi untuk **Kedai Kopi Ruang Atas**, coffee shop cozy bernuansa industrial dan rooftop terbuka di Singabangsa, Kecamatan Tenjo, Kabupaten Bogor.

---

## ☕ Identitas Bisnis

- **Nama Bisnis:** Kedai Kopi Ruang Atas
- **Brand Title:** RUANG ATAS — Coffee & Rooftop
- **Tagline:** "Temukan Ruang Nyaman di Atas Secangkir Kopi."
- **Deskripsi:** "Tempat singgah untuk menikmati kopi, berbagi cerita, dan menemukan suasana tenang di tengah kesibukan."
- **Lokasi:** Kampung Baru, pertigaan Gerobog (pintu masuk Perumahan Tenjo City Tahap 3), Singabangsa, Kecamatan Tenjo, Kabupaten Bogor, Jawa Barat 16370.
- **Rating Referensi:** 4,9 / 5,0 dari 56 ulasan Google Maps.
- **Jam Buka Referensi:** Buka mulai pukul 16.00 WIB (Sore hingga Malam).

---

## 📸 Integrasi 3 Foto Asli Kedai

Ketiga foto asli kedai telah diintegrasikan secara penuh pada website (tersimpan lokal di `/public/images/` dengan fallback URL direct IBB dan penanganan error `ImageWithFallback`):

1. **Foto Asli 1 (Visual Utama / Hero & Galeri):**
   - File lokal: `/public/images/foto_asli_1.jpg`
   - Direct CDN: `https://i.ibb.co/kgWcvHfj/Screenshot-20261013-011352.jpg`
   - Halaman IBB: `https://ibb.co.com/tMWCFmtg`
2. **Foto Asli 2 (About Story & Sudut Meja Kayu Industrial):**
   - File lokal: `/public/images/foto_asli_2.jpg`
   - Direct CDN: `https://i.ibb.co/6JwVYgNS/Screenshot-20261013-011302.jpg`
   - Halaman IBB: `https://ibb.co.com/qFjXBkx8`
3. **Foto Asli 3 (Galeri Suasana Rooftop & Nuansa Terbuka):**
   - File lokal: `/public/images/foto_asli_3.jpg`
   - Direct CDN: `https://i.ibb.co/Q3Q7yR6s/Screenshot-20261013-011329.jpg`
   - Halaman IBB: `https://ibb.co.com/hJ9x3jKp`

---

## 🎨 Desain Editorial & Anti-AI Slop

Tampilan antarmuka dirancang dengan pendekatan editorial layaknya kurasi coffee house artisan:
- **Bebas dari Template AI Generik:** Tidak menggunakan ornamen lingkaran blur neon, kartu mengambang berulang yang kaku, atau badge stempel artifisial.
- **Bebas dari Daftar Harga (Pricelist):** Tidak menampilkan nominal harga asumsi atau angka fiktif. Sajian kopi, mocktail, dan kudapan disajikan murni berdasarkan karakter rasa, seduhan, dan pengalaman minum kopi, dengan ajakan menanyakan ketersediaan menu harian langsung di meja bar kedai.
- **Palet Warna:** Espresso Black (`#151210`), Coffee Surface (`#1E1814`), Antique Brass (`#B88246`), Warm Cream (`#FAF7F2`), dan Stone Gray (`#8A7E73`).
- **Tipografi:** *Playfair Display* (Editorial Serif) dan *Plus Jakarta Sans* (Sans-serif proporsional).

---

## 🚀 Panduan Menjalankan Secara Lokal

```bash
# 1. Instalasi dependensi
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk produksi
npm run build
```
Buka browser pada alamat `http://localhost:3000`.

---

## ⚙️ Mengubah Data & Menambah Menu

- **Data Bisnis, Kontak WhatsApp, & Jam Buka:** Buka `src/data/business.ts`.
- **Daftar Pilihan Sajian Menu:** Buka `src/data/menu.ts`.
- **Foto Dokumentasi Kedai:** Simpan foto di `public/images/` dan perbarui `src/data/business.ts`.
