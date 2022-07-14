import { useDispatch } from 'react-redux';
import { getCurrentUser } from './services/auth.service';
import { writeUserToLocalStorage, deleteUserFromLocalStorage } from './redux/reducers/userReducer';
import { addToCard, clearCart, decreaseItemQuantity, getTotal, removeFromCart } from './redux/reducers/cartReducer';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useAppDispatch } from './hooks/useTypedDispatch';

export default function StoreTest() {
  const dispatch = useAppDispatch();
  const state = useTypedSelector((state) => state);
  const addGame1 = () => {
    dispatch(
      addToCard({
        id: 1,
        name: 'Game1',
        imageUrl: 'url',
        description: 'description',
        rating: 5,
        ageLimit: 18,
        price: 1500,
        platform: {
          pc: true,
          xbox: false,
          playstation: true
        }
      })
    );
  };
  const addGame2 = () => {
    dispatch(
      addToCard({
        id: 2,
        name: 'Game2',
        imageUrl: 'url',
        description: 'description',
        rating: 5,
        ageLimit: 18,
        price: 1500,
        platform: {
          pc: true,
          xbox: false,
          playstation: true
        }
      })
    );
  };
  const clearStore = () => dispatch(clearCart());
  const minusGame = () => dispatch(decreaseItemQuantity({ id: 1 }));
  const getCartTotal = () => dispatch(getTotal());
  const removeGame = () => dispatch(removeFromCart({ id: 1 }));
  const loginUser = () => dispatch(writeUserToLocalStorage({ name: 'Matthew' }));
  const logoutUser = () => dispatch(deleteUserFromLocalStorage());
  const getUser = () => console.log(getCurrentUser());
  return (
    <div className="React-App">
      <button onClick={() => console.log(state)}>getStore</button>
      <button onClick={() => addGame1()}>addGame1</button>
      <button onClick={() => addGame2()}>addGame2</button>
      <button onClick={() => getUser()}>getCurrentuser</button>
      <button onClick={() => clearStore()}>clearStore</button>
      <button onClick={() => minusGame()}>minusGame</button>
      <button onClick={() => removeGame()}>removeGame</button>
      <button onClick={() => getCartTotal()}>getTotalCart</button>
      <button onClick={() => loginUser()}>loginUser</button>
      <button onClick={() => logoutUser()}>logoutUser</button>
      <p style={{ color: 'white' }}>{JSON.stringify(state)}</p>
    </div>
  );
}
