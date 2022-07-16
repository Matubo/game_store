import axios from 'axios';
import { useState } from 'react';

type ISearchOptions = {
  name?: string;
  ageLimit?: number;
  rating?: number;
  genre?: string;
  platform?: { xbox?: boolean; playstation?: boolean; pc?: boolean };
};

export default function ApiTest() {
  const [state, setState] = useState('');
  const [active, setActive] = useState(false);
  function getGames(url: string, search_options?: ISearchOptions) {
    const options = {
      method: 'GET',
      url: `games`,
      params: search_options
    };

    axios
      .request(options)
      .then(function (response) {
        setState(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div>
      <p style={{ color: 'white' }}>API tests</p>
      <button onClick={() => getGames('games')}>game</button>
      <button onClick={() => getGames('top-games')}>game-top</button>
      <button
        onClick={() => {
          getGames('games', { platform: { xbox: true } });
        }}
      >
        getXbox
      </button>
      <button
        onClick={() => {
          setActive(!active);
        }}
      >
        Развернуть результаты
      </button>
      {active ? (
        <p style={{ backgroundColor: '#aba7a7', border: '2px solid #636161', borderRadius: '10px' }}>{state}</p>
      ) : (
        <></>
      )}
    </div>
  );
}
