import './Team.css'


export default function Team() {
    return (
        <div className="container">
            {/* Header */}
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
                        <i className="fa-solid fa-book fa-2xl" style={{ color: "#ffffffff" }}></i>
                        <span className="ms-2 fs-4">Bookstore</span>
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" className="nav-link px-2">Home</a></li>
                    <li><a href="#" className="nav-link px-2">Book</a></li>
                    <li><a href="#" className="nav-link px-2">Team</a></li>
                    <li><a href="#" className="nav-link px-2">Contact</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Register</button>
                </div>
            </header>

            {/* Team Section */}
            <div className="my-5">
                <h1 className="text-center mb-4">Our Team</h1>
                <p className="text-center mb-5">
                    Kami adalah tim yang solid, penuh semangat, dan berdedikasi untuk menciptakan pengalaman digital terbaik.
                </p>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card text-center h-100">
                            <img src="data:image/jpeg;base64,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" className="card-img-top rounded-circle mx-auto mt-3" alt="Rafi Hidayat" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">Rafi Hidayat</h5>
                                <p className="card-text">Frontend Developer</p>
                                <button className="btn btn-outline-secondary btn-sm">Lihat Profil</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <img src="https://i.pravatar.cc/200?img=2" className="card-img-top rounded-circle mx-auto mt-3" alt="Sinta Dewi" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">Sinta Dewi</h5>
                                <p className="card-text">UI/UX Designer</p>
                                <button className="btn btn-outline-secondary btn-sm">Lihat Profil</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <img src="https://i.pravatar.cc/200?img=3" className="card-img-top rounded-circle mx-auto mt-3" alt="Budi Santoso" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">Budi Santoso</h5>
                                <p className="card-text">Backend Developer</p>
                                <button className="btn btn-outline-secondary btn-sm">Lihat Profil</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-center h-100">
                            <img src="https://i.pravatar.cc/200?img=4" className="card-img-top rounded-circle mx-auto mt-3" alt="Lestari Putri" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">Lestari Putri</h5>
                                <p className="card-text">Project Manager</p>
                                <button className="btn btn-outline-secondary btn-sm">Lihat Profil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
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
    );
}