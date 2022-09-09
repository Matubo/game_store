import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { APIURL } from 'src/consts/APIURL';
import { IOrderElem } from 'src/types/query_result/OrgerResult';
import OrderListElem from './OrderListElem';
import './OrderList.scss';

interface IProps {
  username: string;
  login: boolean;
}

export default function OrdersList({ username, login }: IProps) {
  const [ordersState, setOrdersState] = useState([]);
  const { getOrders } = APIURL;

  useEffect(() => {
    return () => {
      if (login == true) {
        axios
          .post(getOrders, { username })
          .then((result) => {
            setOrdersState(result.data);
            console.log('order');
          })
          .catch((result) => {
            console.log(result);
          });
      }
    };
  }, []);

  const tableRef = useRef(null);

  const orderClickHandler = (orderId: number) => {
    const elements = tableRef.current.querySelectorAll(`[data-order-id=n${orderId}]`);
    if (elements[0].style.display == 'table-row') {
      elements.forEach((elem: HTMLElement) => {
        elem.style.display = 'none';
      });
    } else {
      elements.forEach((elem: HTMLElement) => {
        elem.style.display = 'table-row';
      });
    }
  };

  return ordersState.length > 0 ? (
    <>
      <p className="orders-heading">Orders</p>
      <div className="orders">
        <table className="orders__table">
          <thead className="order-thead">
            <tr>
              <td className="order-thead__img">img</td>
              <td className="order-thead__name">name</td>
              <td className="order-thead__amount">amount</td>
              <td className="order-thead__price">price</td>
            </tr>
          </thead>
          <tbody ref={tableRef}>
            {ordersState.map((elem) => {
              return (
                <>
                  <tr
                    className="table__order-info"
                    onClick={() => {
                      orderClickHandler(elem.id);
                    }}
                  >
                    <td colSpan={2}>
                      Order #{elem.id}
                      <br></br>
                      {elem.date}
                    </td>
                    <td>{elem.amount}</td>
                    <td>{elem.total}</td>
                  </tr>
                  {elem.order.map((gameElem: IOrderElem) => {
                    return <OrderListElem key={gameElem.id} orderId={elem.id} {...gameElem} />;
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <></>
  );
}
