// controller.mjs
import users from "./data.js";

// Melihat data
const index = () => {
    console.log("Daftar User:");
    users.map((user, i) => {
        console.log(`${i + 1}. ${user.nama}, ${user.umur} tahun, ${user.alamat}, ${user.email}`);
    });
};

// Menambah data
const store = (newUsers) => {
    users.push(...newUsers); // menambah beberapa data sekaligus
    console.log(`✅ ${newUsers.length} data berhasil ditambahkan`);
};

// Menghapus data terakhir
const destroy = () => {
    const deleted = users.pop();
    console.log(`❌ Data dihapus: ${deleted.nama}`);
};

export { index, store, destroy };
