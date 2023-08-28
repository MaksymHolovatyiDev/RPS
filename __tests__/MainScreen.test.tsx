import {render, screen} from '@testing-library/react-native';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

import Main from 'src/Screens/Main';

describe('Main render', () => {
  it('Should renders correctly', () => {
    jest.useFakeTimers();
    const tree = render(<Main />).toJSON();

    expect(screen.getByText('Score')).toBeDefined();

    expect(tree).toMatchSnapshot();
  });
});
