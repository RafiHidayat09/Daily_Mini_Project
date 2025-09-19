// Array produk awal
let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("=== Daftar Produk Toko ===");
    produkToko.forEach((produk) => {
        console.log(
            "ID: " + produk.id +
            ", Nama: " + produk.nama +
            ", Harga: Rp" + produk.harga +
            ", Stok: " + produk.stok
        );
    });
}

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    let produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };
    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" berhasil ditambahkan!`);
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
    let index = produkToko.findIndex(produk => produk.id === id);
    if (index !== -1) {
        let produkHapus = produkToko.splice(index, 1);
        console.log(`Produk "${produkHapus[0].nama}" berhasil dihapus!`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan!`);
    }
}


tampilkanProduk();         // Menampilkan produk awal

tambahProduk("LCD", 900000, 9);
tampilkanProduk();         // Setelah tambah produk

hapusProduk(2);
tampilkanProduk();         // Setelah hapus produk
