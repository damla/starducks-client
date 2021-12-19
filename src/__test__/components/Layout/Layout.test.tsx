import { render } from '@testing-library/react';
import { Layout } from '../../../components';

describe('Tests of Layout component', () => {
  it('Tests of Layout component', () => {
    const { getByTestId } = render(<Layout>test</Layout>);
    expect(getByTestId('layout')).toBeInTheDocument();
    expect(getByTestId('layout').textContent).toStrictEqual('test');
  });
});
