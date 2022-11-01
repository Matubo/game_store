import { useAppDispatch } from 'src/hooks/useTypedDispatch';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { decreaseItemQuantity, clearCart } from 'src/redux/reducers/cartReducer';
import { APIURL } from 'src/consts/APIURL';
import err_img from '../../assets/img/error_img/no_image_avaliable.jpg';
import './CartPage.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { routesURL } from 'src/consts/routesURL';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice, totalQuantity } = useTypedSelector((state) => state.cart);
  const { username, login } = useTypedSelector((state) => state.user);
  const { setOrder } = APIURL;
  const { user } = routesURL;

  const placeAnOrderQuery = () => {
    axios
      .post(setOrder, { username, order: cartItems })
      .then(() => {
        clearCartHandler();
        alert('Your order has been confirmed!');
      })
      .catch((result) => {
        alert(result.message);
      });
  };

  const decreaseClickHandler = (id: number) => {
    dispatch(decreaseItemQuantity({ id }));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const imgErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    e.currentTarget.src = err_img;
  };

  if (cartItems.length > 0)
    return (
      <div className="cart">
        <table className="cart__table cart-table">
          <thead className="cart-table__head">
            <tr>
              <th>img</th>
              <th>name</th>
              <th>count</th>
              <th>price</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody className="cart-table__game-list">
            {cartItems.map((elem) => {
              return (
                <tr key={elem.id} className="game-list__elem">
                  <td className="game-list__img-container">
                    <img className="img-container__img" src={elem.image} onError={imgErrorHandler} alt="game-img"></img>
                  </td>
                  <td>{elem.name}</td>
                  <td>{elem.amount}</td>
                  <td>{elem.price}</td>
                  <td>
                    <button
                      className="game-list__subt-button"
                      onClick={() => {
                        decreaseClickHandler(elem.id);
                      }}
                    >
                      -
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td className="cart-table__empty-td"></td>
              <td className="cart-table__empty-td"></td>
              <td>{totalQuantity}</td>
              <td>{totalPrice}</td>
              <td className="cart-table__clear-button">
                <button className="cart__clear-button" onClick={clearCartHandler}>
                  Clear
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {login ? (
          <button className="cart__buy-button" onClick={placeAnOrderQuery}>
            place an order
          </button>
        ) : (
          <Link to={user}>
            <button className="cart__buy-button">place an order</button>
          </Link>
        )}
      </div>
    );

  return <p className="cart-empty">cart is empty</p>;
}
