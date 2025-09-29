import Footer from "../../component/shared/footer";
import '../../App.css'
import Header from "../../component/shared/header";

export default function Contact(){
    return(
        <>
        <Header/>
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
        <Footer/>
        </>
    )
}