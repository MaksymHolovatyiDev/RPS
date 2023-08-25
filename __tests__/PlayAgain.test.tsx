import {render, screen, waitFor} from '@testing-library/react-native';

import PlayAgain from 'src/components/PlayAgain/PlayAgain';

let mockHousePick = 1;

jest.mock('src/Provider/Provider', () => {
  return {
    useRPS: () => ({
      picked: {key: 'Scissors'},
      housePick: mockHousePick,
      setScore: () => {},
    }),
  };
});
jest.mock('src/helpers/helpers', () => ({
  AnimatedFunction: () => {},
}));

describe('Play again render', () => {
  it('Should renders correctly', () => {
    const tree = render(<PlayAgain />).toJSON();

    expect(screen.getByText('Play again')).toBeDefined();
    expect(tree).toMatchSnapshot();
  });

  it('Should win', async () => {
    render(<PlayAgain />);

    await waitFor(
      () => {
        expect(screen.getByText('You win')).toBeDefined();
      },
      {timeout: 1300},
    );
  });

  it('Should lose', async () => {
    mockHousePick = 4;

    render(<PlayAgain />);

    await waitFor(
      () => {
        expect(screen.getByText('You lose')).toBeDefined();
      },
      {timeout: 1300},
    );
  });

  it('Should to be draw', async () => {
    mockHousePick = 0;

    render(<PlayAgain />);

    await waitFor(
      () => {
        expect(screen.getByText('Draw')).toBeDefined();
      },
      {timeout: 1300},
    );
  });
});
