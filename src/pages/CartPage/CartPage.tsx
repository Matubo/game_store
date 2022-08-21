import { useAppDispatch } from 'src/hooks/useTypedDispatch';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { decreaseItemQuantity, clearCart } from 'src/redux/reducers/cartReducer';
import err_img from '../../assets/img/error_img/no_image_avaliable.jpg';
import './CartPage.scss';

export default function CartPage() {
  const dispatch = useAppDispatch();
  const { cartItems, totalPrice, totalQuantity } = useTypedSelector((state) => state.cart);
  /*   const {} = useTypedSelector((state) => state.user.user); */

  const decreaseClickHandler = (id: number) => {
    dispatch(decreaseItemQuantity({ id }));
  };

  const clearCartClickHandler = () => {
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
          <tbody className="cart-table__body">
            {cartItems.map((elem, i) => {
              return (
                <tr key={elem.id}>
                  <td className="cart-tale__img-container">
                    <img className="img-container__img" src={elem.image} onError={imgErrorHandler}></img>
                  </td>
                  <td>{elem.name}</td>
                  <td>{elem.amount}</td>
                  <td>{elem.price}</td>
                  <td>
                    <button
                      className="cart-table__subt-button"
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
                <button className="cart__clear-button" onClick={clearCartClickHandler}>
                  Clear
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="cart__buy-button" onClick={() => {}}>
          place an order
        </button>
      </div>
    );

  return <p className="cart-empty">cart is empty</p>;
}
