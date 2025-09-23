// -----------------------------------------
// Class untuk kendaraan
// -----------------------------------------
class Kendaraan {
    constructor(merk, tipe) {
        this.merk = merk; // Merk kendaraan
        this.tipe = tipe; // Tipe kendaraan (mobil, motor, dll)
    }

    info() {
        return `${this.merk} (${this.tipe})`;
    }
}

// -----------------------------------------
// Class untuk pelanggan
// -----------------------------------------
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;                   // Nama pelanggan
        this.nomorTelepon = nomorTelepon;   // Nomor telepon pelanggan
        this.kendaraanDisewa = null;        // Kendaraan yang sedang disewa, default null
    }

    // Metode untuk menyewa kendaraan
    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;   // Simpan kendaraan yang disewa
        console.log(`${this.nama} berhasil menyewa ${kendaraan.info()}`);
    }

    // Metode untuk menampilkan info pelanggan dan kendaraan yang disewa
    info() {
        if (this.kendaraanDisewa) {
            return `${this.nama} | Telp: ${this.nomorTelepon} | Menyewa: ${this.kendaraanDisewa.info()}`;
        } else {
            return `${this.nama} | Telp: ${this.nomorTelepon} | Tidak sedang menyewa kendaraan`;
        }
    }
}

// -----------------------------------------
// Sistem manajemen transportasi
// -----------------------------------------
class SistemTransportasi {
    constructor() {
        this.daftarPelanggan = []; // Array untuk menyimpan semua pelanggan
    }

    // Menambahkan pelanggan baru
    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    // Menampilkan daftar pelanggan yang sedang menyewa kendaraan
    tampilDaftarPelanggan() {
        console.log("=== Daftar Pelanggan yang Sedang Menyewa Kendaraan ===");
        this.daftarPelanggan.forEach(pelanggan => {
            if (pelanggan.kendaraanDisewa) {
                console.log(pelanggan.info());
            }
        });
    }
}

// -----------------------------------------
// Contoh penggunaan sistem
// -----------------------------------------

// Membuat objek kendaraan
const mobil1 = new Kendaraan("Toyota", "Corolla");
const motor1 = new Kendaraan("Honda", "CBR500R");

// Membuat objek pelanggan
const pelanggan1 = new Pelanggan("Rafi", "081234567890");
const pelanggan2 = new Pelanggan("Siti", "082345678901");

// Membuat sistem transportasi
const sistem = new SistemTransportasi();

// Menambahkan pelanggan ke sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// Pelanggan menyewa kendaraan
pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);

// Menampilkan daftar pelanggan yang sedang menyewa kendaraan
sistem.tampilDaftarPelanggan();
