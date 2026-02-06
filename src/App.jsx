import Header from "./components/header";
import Footer from "./components/footer";
import ProductPage from "./pages/practicepage";
import First from "./useEffect/useEffect";
import {BrowserRouter,Routes,Route} from "react-router"

const App=()=>{
  return(
  <BrowserRouter>
  <Routes>
    <Route  path="/header" element={<Header/>} />
    <Route path="/footer"  element={<Footer/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;




{/* <Header/>
   <Footer/> 
    {/* <ProductPage/> */}
  // <First/> }