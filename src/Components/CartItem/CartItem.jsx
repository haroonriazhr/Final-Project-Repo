import { useContext } from 'react'
import  './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItem,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitem'>
        <div className="cart-item-formet-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
        </div>
        <hr/>
            {all_product.map((e)=>{
                if (cartItem[e.id]>0)
                {
                    return <div>
                    <div className="cart-item-formet cart-item-formet-main">
                        <img src={e.image} alt="" className='cart-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                        <p>${e.new_price*cartItem[e.id]}</p>
                        <i onClick={()=>(removeFromCart(e.id))} class="ri-subtract-line"></i>
                    </div>
                    <hr />
                </div>
                }
                return null;
            })}
            <div className="cart-down">
                <div className="cart-total">
                    <h1>cart total</h1>
                    <div className='btn'>
                        <div className="cart-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-item-total">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-item-total">
                            <h3>Total</h3>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <button>Proceed To Check Out</button>
                    </div>
                    <div className="promocode">
                        <p>If you have a promo code enter here.</p>
                        <div className="promobox">
                            <input type="text" placeholder='00xx0' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CartItem