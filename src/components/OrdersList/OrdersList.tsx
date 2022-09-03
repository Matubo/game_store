import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { APIURL } from 'src/consts/APIURL';
import err_img from '../../assets/img/error_img/no_image_avaliable.jpg';
interface IProps {
  orders: {
    id: number;
    username: string;
    date: string;
    order: { name: string; amount: string; price: string; image: string; id: number }[];
  }[];
}

export default function OrdersList({ orders }: IProps) {
  const imgErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.preventDefault();
    e.currentTarget.src = err_img;
  };

  const getOrderDOM = (elem: { name: string; amount: string; price: string; image: string; id: number }) => {
    console.log(elem);
    return (
      <tr key={elem.id}>
        <td className="cart-tale__img-container">
          <img
            className="img-container__img"
            style={{ width: '50px' }}
            src={elem.image}
            onError={imgErrorHandler}
          ></img>
        </td>
        <td>{elem.name}</td>
        <td>{elem.amount}</td>
        <td>{elem.price}</td>
      </tr>
    );
  };

  return orders.length > 0 ? (
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
          {orders.map((elem) => {
            return (
              <>
                <tr key={elem.id}>
                  order {elem.id} {elem.date}
                </tr>
                {elem.order.map((elem: { name: string; amount: string; price: string; image: string; id: number }) => {
                  return getOrderDOM(elem);
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
