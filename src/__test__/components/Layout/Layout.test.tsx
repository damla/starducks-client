import { render } from '@testing-library/react';
import { FilterList, Layout, Main, Search, Sidebar } from '../../../components';

describe('Tests of FilterList component', () => {
  it('Tests of Layout component', () => {
    const { getByTestId } = render(<Layout>test</Layout>);
    expect(getByTestId('layout')).toBeInTheDocument();
    expect(getByTestId('layout').textContent).toStrictEqual('test');
  });
});
