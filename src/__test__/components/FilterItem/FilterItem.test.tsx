import { render } from '@testing-library/react';
import { FilterItem } from '../../../components';

describe('Tests of CoffeeItem component', () => {
  it('should render as expected', () => {
    const filterName = 'All Coffee';
    const { getByTestId } = render(<FilterItem name={'All Coffee'} />);

    expect(getByTestId('filter-item')).toBeInTheDocument();
    expect(getByTestId('filter-item').textContent).toStrictEqual(filterName);
  });
});
