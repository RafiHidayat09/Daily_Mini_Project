import './App.css'


export default function Contact() {
    return (
        <>
            <div className="container">
            {/* HEADER */}
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
                        {/* tempat ikon */}
                        <i className="fa-solid fa-book fa-2xl" style={{ color: "#ffffffff" }}></i>
                        {/* Supaya rapi di a gunakan align-items-center */}
                        <span className="ms-2 fs-4">Bookstore</span>
                    </a>
                </div>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        {/* Jika ada link secondary bisa dihapus supaya warnanya sama */}
                        <a href="#" className="nav-link px-2">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-2">
                            Book
                        </a>
                    </li>
                    <li>
                        <a href="Team.jsx" className="nav-link px-2">
                            Team
                        </a>
                    </li>
                    <li>
                        <a href="Contact.jsx" className="nav-link px-2">
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">
                        Login
                    </button>
                    <button type="button" className="btn btn-primary">
                        Register
                    </button>
                </div>
            </header>

            {/* CONTACT FORM */}
            <div className="container my-5">
                <h1 className="mb-4 text-center">Hubungi Kami</h1>
                <p className="text-center mb-4">
                    Punya pertanyaan atau saran? Silakan isi form di bawah ini.
                </p>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Nama</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Nama Anda"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="email@contoh.com"
                            required
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="message" className="form-label">Pesan</label>
                        <textarea
                            id="message"
                            rows="5"
                            className="form-control"
                            placeholder="Tulis pesan Anda..."
                            required
                        ></textarea>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary px-4">
                            Kirim Pesan
                        </button>
                    </div>
                </form>
            </div>

            {/* FOOTER */}
                {/* Footer */}
                <div className="container" style={{ color: "#ffffffff" }}>
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-white">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-white">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-white">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-white">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link px-2 text-white">
                                    About
                                </a>
                            </li>
                        </ul>
                        <p className="text-center ">
                            © 2025 Muhammad Rafi Hidayat
                        </p>
                    </footer>
                </div>
        </div>
        </>
    );
}
