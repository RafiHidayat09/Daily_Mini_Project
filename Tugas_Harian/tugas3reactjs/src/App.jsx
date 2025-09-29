import{BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Contact from "./pages/contact";
import Team from "./pages/team";

function App() {
 
  return (
    <>
      <div className="container-fluid">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="books" element={<Books/>}/>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="team" element={<Team />} />

        
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
