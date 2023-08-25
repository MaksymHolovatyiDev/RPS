import {render, screen} from '@testing-library/react-native';
import {Animated} from 'react-native';

import Rules from 'src/components/Rules/Rules';
import RulesBtn from 'src/components/Rules/RulesBtn';

describe('Rules', () => {
  it('Should render RulesBtn', () => {
    const tree = render(<RulesBtn />).toJSON();

    expect(screen.getAllByText('Rules').length).toBe(2);
    expect(tree).toMatchSnapshot();
  });

  it('Should render Main rules', () => {
    const tree = render(<Rules translateY={new Animated.Value(0)} />).toJSON();

    expect(screen.getByText('Rules')).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
