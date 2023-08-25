import {render, screen} from '@testing-library/react-native';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

import RPSPicked from 'src/components/RPSPicked/RPSPicked';

describe('RPSPicked render', () => {
  it('Should renders correctly', () => {
    jest.useFakeTimers();
    const tree = render(<RPSPicked />).toJSON();

    expect(screen.getByText('You picked')).toBeDefined();
    expect(screen.getByText('The house picked')).toBeDefined();
    expect(screen.getByText('Play again')).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
