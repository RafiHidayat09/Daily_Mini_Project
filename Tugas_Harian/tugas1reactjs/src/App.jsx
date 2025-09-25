import './App.css'

function App() {
 
  return (
    <>
      <div className="container">
        {/*Header*/}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              {/* tempat ikon */}
              <i className="fa-solid fa-book fa-2xl" style={{color: "#ffffffff"}}></i>
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
        {/* Konten atau Hero */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
               Atomic Habits: Perubahan Kecil Yang Memberikan Hasil Luar Biasa
              </h1>
              <p className="lead">
                Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaaan buruk
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                  Buy Now
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Detail
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img 
              className="rounded-lg-3" 
                src="https://i0.wp.com/sufimuda.net/wp-content/uploads/2023/11/Atomic-Habits-by-James-Clear.jpg?ssl=1" 
              alt="" width="500"/>
            </div>
          </div>
        </div>
        {/* Produk List */}
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">
                  Best Seller
                </h1>
                <p className="lead" style={{color:"white"}}>
                  Temukan banyak buku menarik yang mengisi waktu bosanmu, dijamin otak pasti selalu connect
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2 m-2">
                   Views
                  </a>
                  <a href="#" className="btn btn-secondary my-2">
                    Other Book
                  </a>
                </p>
              </div>
            </div>
          </section>
          <div className="album py-5">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="https://static.posters.cz/image/1300/214930.jpg"
                      className="bd-placeholder-img card-img-top"
                      alt="Book Thumbnail"
                      style={{
                        objectFit: "cover",   // biar mirip preserveAspectRatio slice
                        height: "225px",      // sama kayak height SVG
                        width: "100%",        // full lebar
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                       Harry Potter #1
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                        
                        </div>
                        <small className="text-body-secondary">
                          IDR 9.000.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="https://bookclubs.scholastic.ca/dw/image/v2/AAXY_PRD/on/demandware.static/-/Sites-master-catalog-cec-ca/default/dw1e5b8655/products/9781408855652.jpg?sw=960&sh=960&sm=fit&sfrm=jpg"
                      className="bd-placeholder-img card-img-top"
                      alt="Book Thumbnail"
                      style={{
                        objectFit: "cover",   // biar mirip preserveAspectRatio slice
                        height: "225px",      // sama kayak height SVG
                        width: "100%",        // full lebar
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Harry Potter #2
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                
                        </div>
                        <small className="text-body-secondary">
                          IDR 9.000.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9798886637960/harry-potters-journey-to-hogwarts-9798886637960_hr.jpg"
                      className="bd-placeholder-img card-img-top"
                      alt="Book Thumbnail"
                      style={{
                        objectFit: "cover",   // biar mirip preserveAspectRatio slice
                        height: "225px",      // sama kayak height SVG
                        width: "100%",        // full lebar
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                       Harry Potter #3 </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                         
                        </div>
                        <small className="text-body-secondary">
                          IDR 9.000.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="https://warhammer40kfanatics.com/wp-content/uploads/2024/04/chaos-space-marines-battleforce-hero-1.png"
                      className="bd-placeholder-img card-img-top"
                      alt="Book Thumbnail"
                      style={{
                        objectFit: "cover",   // biar mirip preserveAspectRatio slice
                        height: "225px",      // sama kayak height SVG
                        width: "100%",        // full lebar
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        warhammer 40k #1</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          IDR 25.000.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="https://pbs.twimg.com/media/GcMtAd_WAAANXzg.png"
                      className="bd-placeholder-img card-img-top"
                      alt="Book Thumbnail"
                      style={{
                        objectFit: "cover",   // biar mirip preserveAspectRatio slice
                        height: "225px",      // sama kayak height SVG
                        width: "100%",        // full lebar
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Warhammer 40k #2
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                        
                        </div>
                        <small className="text-body-secondary">
                          IDR 25.000.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="https://www.wargamer.com/wp-content/sites/wargamer/2024/11/warhammer-40k-artist-thomas-elliot-agori-shootout.jpg"
                      className="bd-placeholder-img card-img-top"
                      alt="Book Thumbnail"
                      style={{
                        objectFit: "cover",   // biar mirip preserveAspectRatio slice
                        height: "225px",      // sama kayak height SVG
                        width: "100%",        // full lebar
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                      Warhammer 40k #3                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                        
                        </div>
                        <small className="text-body-secondary">
                          IDR 25.000.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="https://cdn.gramedia.com/uploads/items/sesuk.jpg"
                      className="bd-placeholder-img card-img-top"
                      alt="Book Thumbnail"
                      style={{
                        objectFit: "cover",   // biar mirip preserveAspectRatio slice
                        height: "225px",      // sama kayak height SVG
                        width: "100%",        // full lebar
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Tere Liye #1
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                         
                        </div>
                        <small className="text-body-secondary">
                          IDR 1.000.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1451905281i/28446637.jpg"
                      className="bd-placeholder-img card-img-top"
                      alt="Book Thumbnail"
                      style={{
                        objectFit: "cover",   // biar mirip preserveAspectRatio slice
                        height: "225px",      // sama kayak height SVG
                        width: "100%",        // full lebar
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                      Tere Liye #2                     </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                          
                        </div>
                        <small className="text-body-secondary">
                          IDR 1.000.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img
                      src="https://s3-ap-southeast-1.amazonaws.com/ebook-previews/42717/156292/1.jpg"
                      className="bd-placeholder-img card-img-top"
                      alt="Book Thumbnail"
                      style={{
                        objectFit: "cover",   // biar mirip preserveAspectRatio slice
                        height: "225px",      // sama kayak height SVG
                        width: "100%",        // full lebar
                      }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Tere Liye #3 
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">
                            View
                          </button>
                         
                        </div>
                        <small className="text-body-secondary">
                          IDR 2.000.000
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
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
  )
}

export default App
