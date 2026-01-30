import Header from "../../components/header";
import ProductsContainer from "../../components/productcontainer";





const ProductPage=()=>{
    return(
        <div>
          <Header title={"Products"}/> 
          <h1>Latest Products</h1>
          <ProductsContainer/>
        </div>
    )
}

export default ProductPage;