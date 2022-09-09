import axios from 'axios';
import { useEffect, useState } from 'react';
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

  function test() {
    console.log('test');
  }

  return ordersState.length > 0 ? (
    <>
      <p className="orders-heading">Orders</p>
      <div className="orders">
        <table className="orders__table">
          <thead>
            <tr>
              <td>img</td>
              <td>name</td>
              <td>amount</td>
              <td>price</td>
            </tr>
          </thead>
          <tbody>
            {ordersState.map((elem) => {
              return (
                <>
                  <tr
                    className="table__order-info"
                    onClick={() => {
                      test();
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
                  {elem.order.map((elem: IOrderElem) => {
                    return <OrderListElem key={elem.id} {...elem} />;
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
