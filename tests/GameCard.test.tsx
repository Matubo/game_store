import { fireEvent, render, screen } from '@testing-library/react';
import GameCard from 'src/components/GameCard/GameCard';
import { IGameCard } from 'src/types/gameCard';

describe('GameCard tests', () => {
  const gameExample: IGameCard = {
    ageLimit: 18,
    id: 1,
    image: '/srcTest',
    name: 'TestGame',
    platform: { pc: true, playstation: false, xbox: true },
    price: 1800,
    description: 'The Greatest test game for test',
    discount: 5,
    rating: 4
  };

  const callbackMock = jest.fn((game: IGameCard) => {
    return game;
  });

  const { getByRole, getByAltText } = render(<GameCard callback={callbackMock} game={gameExample}></GameCard>);
  const button = getByRole('button');
  fireEvent.click(button);

  test('button call handler', () => {
    expect(callbackMock).toBeCalledTimes(1);
  });

  test('callback return data', () => {
    expect(callbackMock.mock.results[0].value).toBe(gameExample);
  });

  test('img set url from prop', () => {
    render(<GameCard callback={callbackMock} game={gameExample}></GameCard>);
    const img = getByAltText('game-pic');
    expect((img as HTMLImageElement).src).toContain(gameExample.image);
  });

  test('img error handler', () => {
    render(<GameCard callback={callbackMock} game={gameExample}></GameCard>);
    const img = getByAltText('game-pic');
    expect((img as HTMLImageElement).src).not.toBe(gameExample.image);
  });

  test('snapshot test', () => {
    const { asFragment } = render(<GameCard callback={callbackMock} game={gameExample}></GameCard>);
    expect(asFragment()).toMatchSnapshot();
  });
});
