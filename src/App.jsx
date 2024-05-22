import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandPage from "./pages/LandPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LandPage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/contact" exact element={<ContactPage />} />
          <Route path="/signup" exact element={<SignUpPage />} />
          <Route path="/signin" exact element={<SignInPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
