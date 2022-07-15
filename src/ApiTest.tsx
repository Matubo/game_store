import axios from 'axios';

type ISearchOptions = {
  name?: string;
  ageLimit?: number;
  rating?: number;
  genre?: string;
  platform?: { xbox?: boolean; playstation?: boolean; pc?: boolean };
};

export default function ApiTest() {
  function getGames(url: string, search_options?: ISearchOptions) {
    const queryParams = JSON.stringify(search_options);
    const options = {
      method: 'GET',
      url: `games`,
      params: search_options
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
      <button onClick={() => getGames('games')}>game</button>
      <button onClick={() => getGames('top-games')}>game-top</button>
      <button
        onClick={() => {
          getGames('games', { platform: { xbox: true } });
        }}
      ></button>
    </>
  );
}
