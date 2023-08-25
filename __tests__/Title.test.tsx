import {render, screen} from '@testing-library/react-native';

import Title from 'src/components/Title/Title';

it('Title score', () => {});

describe('Title render', () => {
  it('Should renders correctly', () => {
    jest.useFakeTimers();

    const tree = render(<Title />).toJSON();

    expect(screen.getByText('Score')).toBeDefined();
    expect(tree).toMatchSnapshot();
  });
});
