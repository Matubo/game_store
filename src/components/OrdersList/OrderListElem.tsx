import err_img from 'src/assets/img/error_img/no_image_avaliable.jpg';
import { IOrderElem } from 'src/types/query_result/OrgerResult';

export default function OrderListElem({ name, amount, id, price, image }: IOrderElem) {
  const imgErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    e.currentTarget.src = err_img;
  };

  return (
    <tr>
      <td>
        <img style={{ width: '50px' }} src={image} onError={imgErrorHandler}></img>
      </td>
      <td>{name}</td>
      <td>{amount}</td>
      <td>{price}</td>
    </tr>
  );
}
