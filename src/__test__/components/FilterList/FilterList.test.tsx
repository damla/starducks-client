import { render } from '@testing-library/react';
import { FilterList } from '../../../components';

describe('Tests of FilterList component', () => {
  it('should render as expected', async () => {
    const { getAllByTestId, getByTestId } = render(<FilterList />);
    expect(getByTestId('filter-list')).toBeInTheDocument();
    expect(getAllByTestId('filter-item')).toHaveLength(3);
  });
});
