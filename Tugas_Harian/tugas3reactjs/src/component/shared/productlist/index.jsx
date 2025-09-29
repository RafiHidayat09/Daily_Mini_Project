export default function ProductList(){
    return (
        <>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">
                                Best Seller
                            </h1>
                            <p className="lead" style={{ color: "white" }}>
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
        </>
    )
}