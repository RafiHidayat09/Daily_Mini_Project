import React, { useState } from "react";
import books from "../Utils/books";

export default function Book() {
    const [bookList, setBookList] = useState([...books]);

    const handleAddBook = () => {
        const newBook = {
            id: bookList.length + 1,
            title: "Buku Baru",
            author: "Anonim",
            year: 2025,
            description: "Ini adalah buku baru yang baru saja ditambahkan.",
            image: "https://via.placeholder.com/225x300",
        };

        setBookList((prevList) => [...prevList, newBook]);
        alert("Buku baru berhasil ditambahkan!");
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Best Seller</h1>
                        <p className="lead">
                            Temukan banyak buku menarik yang mengisi waktu bosanmu, dijamin
                            otak selalu connect
                        </p>
                        <button
                            onClick={handleAddBook}
                            className="btn btn-primary my-2"
                        >
                            Tambah Buku Baru
                        </button>
                    </div>
                </div>
            </section>

            {/* Book List */}
            <div className="album py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {bookList.map((book) => (
                            <div key={book.id} className="col">
                                <div className="card h-100">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="card-img-top"
                                        style={{
                                            objectFit: "cover",
                                            height: "225px",
                                            width: "100%",
                                        }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <p className="card-text fw-bold">{book.title}</p>
                                        <p className="card-text">
                                            By {book.author} ({book.year})
                                        </p>
                                        <p className="card-text small flex-grow-1">
                                            {book.description}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
