import err_img from 'src/assets/img/error_img/no_image_avaliable.jpg';
import { IOrderElem } from 'src/types/OrderElem';
import './OrderListElem.scss';

export default function OrderListElem({ name, amount, price, image, orderId }: IOrderElem & { orderId: number }) {
  const imgErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    e.currentTarget.src = err_img;
  };

  return (
    <tr className="product-row" data-order-id={`n${orderId}`}>
      <td className="product-row__img-container">
        <img src={image} onError={imgErrorHandler} className="img-container__img"></img>
      </td>
      <td>{name}</td>
      <td>{amount}</td>
      <td>{price}</td>
    </tr>
  );
}
