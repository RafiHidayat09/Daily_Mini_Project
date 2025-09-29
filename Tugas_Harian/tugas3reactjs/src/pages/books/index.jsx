import Header from "../../component/shared/header";
import ProductList from "../../component/shared/productlist";
import '../../App.css'
import Footer from "../../component/shared/footer";
import Book from "../../component/BookList";
export default function Books(){
    return(
        <>
        <Header/>
        <Book/>
        <Footer/>
        </>
    )
}