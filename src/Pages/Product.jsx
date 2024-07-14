import { useContext } from "react"
import {ShopContext} from '../Context/ShopContext'
import { useParams } from "react-router-dom";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Discriptionbox from "../Components/DescriptionBox/Discriptionbox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";
const Product = () => {
 const {all_product} = useContext(ShopContext);
 const {productId} = useParams();
 const product = all_product.find((e)=>e.id === Number(productId))
 return (
    <div>
      <BreadCrumbs product={product}/>
      <ProductDisplay product={product}/>
      <Discriptionbox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product