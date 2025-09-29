import Footer from "../../component/shared/footer";
import Header from "../../component/shared/header";
import '../../App.css'

export default function Team(){
    return(
        <>
        <Header/>
            {/* Team Section */}
            <div className="my-5">
                <h1 className="text-center mb-4" style={{ color: "white" }}>Our Team</h1>
                <p className="text-center mb-5" style={{ color: "white" }}>
                    Kami adalah tim yang solid, penuh semangat, dan berdedikasi untuk menciptakan pengalaman digital terbaik.
                </p>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card text-center h-100">
                            <img src="https://sindig.unesa.ac.id/fotomhs/200/23051214080.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Rafi Hidayat" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
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

        <Footer/>
        </>
    )
}