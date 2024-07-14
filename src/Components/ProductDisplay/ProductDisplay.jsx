import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="left">
            <div className="img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-img">
                <img className='productmainimg' src={product.image} alt="" />
            </div> 
        </div>
        <div className="right">
            <h1>{product.name}</h1>
            <div className="right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="rightprice">
                <div className="oldprice">${product.old_price}</div>
                <div className="newprice">${product.new_price}</div>
            </div>
            <div className="rightdesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque mollitia suscipit odio, omnis error, molestiae, quisquam soluta quis culpa tempora assumenda? Voluptas dolorum iste consectetur? Reprehenderit atque delectus itaque architecto!
            </div>
            <div className="rightsize">
                <h1>Select Size</h1>
                <div className="sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className='right-category'><span>Category:</span> Women, T-Shirt, Crop Top</p>
            <p className='right-category'><span>Tags:</span> Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay