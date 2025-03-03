import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({ itemCount }) => (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} size="2x" />
      <span className="cart-count">{itemCount}</span>
    </div>
  );
  
  export default CartWidget