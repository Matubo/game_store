import { getCurrentUser } from './services/auth.service';
import { writeUserToLocalStorage, deleteUserFromLocalStorage } from './redux/reducers/userReducer';
import { addToCard, clearCart, decreaseItemQuantity, getTotal, removeFromCart } from './redux/reducers/cartReducer';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useAppDispatch } from './hooks/useTypedDispatch';
import { useState } from 'react';

export default function StoreTest() {
  const dispatch = useAppDispatch();
  const state = useTypedSelector((state) => state);
  const [active, setActive] = useState(false);
  const [storageUser, setStorageUser] = useState(getCurrentUser());
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
  const loginUser = () => {
    dispatch(writeUserToLocalStorage({ name: 'Matthew' }));
    getUser();
  };
  const logoutUser = () => {
    dispatch(deleteUserFromLocalStorage());
    getUser();
  };
  const getUser = () => setStorageUser(getCurrentUser());
  return (
    <div>
      <p style={{ color: 'white' }}>store tests</p>
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
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        Развернуть результаты
      </button>
      {active ? (
        <p style={{ backgroundColor: '#aba7a7', border: '2px solid #636161', borderRadius: '10px' }}>
          storageUser:{storageUser ? storageUser : 'empty'}
          <br></br>
          {JSON.stringify(state)}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
