// main.mjs
import { index, store, destroy } from "./controller.js";

const main = () => {
    // Tambah minimal 2 data baru
    const newUsers = [
        { nama: "Shafira", umur: 20, alamat: "Jl. Gedangan", email: "shafiraemail@mail.com" },
        { nama: "Azwa", umur: 21, alamat: "Jl. Sekardangan", email: "azwaemail@mail.com" }
    ];

    store(newUsers); // tambah data
    index();         // tampilkan semua data
    destroy();       // hapus data terakhir
    index();         // tampilkan lagi setelah dihapus
};

main();
