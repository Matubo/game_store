import axios from 'axios';
import { useEffect, useState } from 'react';
import { APIURL } from 'src/consts/APIURL';
import { IOrderElem } from 'src/types/query_result/OrgerResult';
import OrderListElem from './OrderListElem';
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

  return ordersState.length > 0 ? (
    <div>
      <table>
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
                <tr key={elem.id}>
                  order {elem.id} {elem.date}
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
  ) : (
    <></>
  );
}
