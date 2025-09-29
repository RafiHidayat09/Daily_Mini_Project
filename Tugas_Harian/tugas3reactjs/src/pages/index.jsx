import Footer from "../component/shared/footer";
import Header from "../component/shared/header";
import Hero from "../component/shared/hero";
import ProductList from "../component/shared/productlist";
import '../App.css'
import Book from "../component/BookList";


export default function Home(){
    return(
        <>
            {/*Header*/}
            <Header />
            {/* Konten atau Hero */}
            <Hero />
            {/* Produk List
            <ProductList /> */}
            {/* {Produk List dengan Hooks} */}
            <Book/>
            {/* Footer */}
            <Footer />
        
        </>
    )
}