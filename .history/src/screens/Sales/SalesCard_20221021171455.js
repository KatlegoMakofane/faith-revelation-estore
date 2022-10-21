import { FaShoppingCart, FaHeart, FaStar, FaFireAlt } from 'react-icons/fa';
import './Sales.css'
import { Link } from 'react-router-dom';
export function SalesCard(props) {
    return(
        <div className='Container'>
        <div className='App'>
            
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                <FaShoppingCart className={"productCard__cart"} />
                <FaHeart className={"productCard__wishlist"} />
               

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        
                    </div>
                    <div className='displayStack__2'>
                        <div className='productRating'>
                            {[...Array(props.rating)].map((index) => (
                                <FaStar id={index + 1 } key={index} />
                            ))}
                        </div>
                        
                    </div>
                </div>
                <button><Link to='/productView'>Go to product</Link></button>
            </div>
        </div>
        </div>
        </div>
    )
}