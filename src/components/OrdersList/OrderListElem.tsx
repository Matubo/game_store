import { IOrderElem } from 'src/types/OrderElem';
import './OrderListElem.scss';

export default function OrderListElem({ name, amount, price, image, orderId }: IOrderElem & { orderId: number }) {
  return (
    <tr className="product-row" data-order-id={`n${orderId}`}>
      <td className="product-row__img-container">
        <img src={image} className="img-container__img" alt="orders"></img>
      </td>
      <td>{name}</td>
      <td>{amount}</td>
      <td>{price}</td>
    </tr>
  );
}
