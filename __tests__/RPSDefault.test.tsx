import {render} from '@testing-library/react-native';
jest.mock('react-native-linear-gradient', () => 'LinearGradient');

import RPSDefault from 'src/components/RPSDefault/RPSDefault';

describe('RPSDefault render', () => {
  it('Should renders correctly', () => {
    const tree = render(<RPSDefault />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
