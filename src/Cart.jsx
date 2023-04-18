import { useDispatch, useSelector } from "react-redux"
import {remove} from './reducers/cartSlice'


const Cart = () => {

    const products = useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    
    function handleCheckout(){
        alert('Thankyou for shopping with us (:(:')
    }

    function handleRemove(id){
        dispatch(remove(id));
    }

    return(<>
    
        <h1>Cart</h1>
        {
            products.map((product)=>{
                return (
                <div key={product.id} className="cart-card-wrapper">
            
            <div>
            <img src={product.image} alt="Img" />
            </div>
              
              <div>
              <h3>{product.title}</h3>
              </div>
              <div>
              <h3>{product.price}</h3>
              </div>
              <div>
              <button onClick={()=>{handleRemove(product.id)}}>Remove</button>
              </div>
          </div>
                )
            })
        }
        
        
        {
            products.length>0?<div className="checkout-ft">
            <div>
                <h2>Total Items: <span>{products.length}</span></h2>
            </div>
            <div>
                <h2>Subtotal: $<span>
                        {
                            products.reduce((acc,curr)=>acc+curr.price,0)
                        }
                    
                    </span></h2>
            </div>
            <div>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
            
        </div>:<div>
            Cart is Empty

        </div>
        }


        
    
    
    
    </>)

}

export default Cart