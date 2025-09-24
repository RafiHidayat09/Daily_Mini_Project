// **Data Produk**
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Headphone", harga: 1500000 },
    { id: 5, nama: "Smartwatch", harga: 2500000 },
];

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
    console.log("=== Daftar Produk ===");
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga}`);
    });
    console.log("=====================\n");
}

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    produkList = [...produkList, produkBaru];
    console.log(`Produk "${nama}" berhasil ditambahkan!\n`);
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...id) {
    produkList = produkList.filter((produk) => !id.includes(produk.id));
    console.log(`Produk dengan ID ${id} berhasil dihapus!\n`);
}

// **Event Listener Sederhana (Simulasi Button di Browser)**
const eventHandler = {
    tampilkan: () => tampilkanProduk(),
    tambah: () => tambahProduk(6, "Kamera", 8500000),
    hapus: () => hapusProduk(2),
};

// --- Simulasi Jalannya Program ---
eventHandler.tampilkan();
eventHandler.tambah();
eventHandler.tampilkan();
eventHandler.hapus();
eventHandler.tampilkan();
