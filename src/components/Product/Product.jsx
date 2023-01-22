import { useParams } from "react-router-dom";
import ProductMain from "./ProductMain/ProductMain";

const Product = () =>{

    const {id} = useParams()
    return(
        
    <div className="preload">

       <ProductMain />
        
    </div>

    )
}

export default Product;