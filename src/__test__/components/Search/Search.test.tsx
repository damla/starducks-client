import { render } from '@testing-library/react';
import { Search } from '../../../components';

describe('Tests of Search component', () => {
  it('should render as expected', async () => {
    const { getByTestId } = render(<Search />);
    expect(getByTestId('search')).toBeInTheDocument();
  });
});
