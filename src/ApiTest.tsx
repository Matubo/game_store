import React from 'react';
import axios from 'axios';

export default function ApiTest() {
  function getGames() {
    const options = {
      method: 'GET',
      url: '/games'
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  return (
    <>
      <button onClick={getGames}>API Test</button>
    </>
  );
}
