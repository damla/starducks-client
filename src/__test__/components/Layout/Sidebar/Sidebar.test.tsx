import { render } from '@testing-library/react';
import { Sidebar } from '../../../../components';

describe('Tests of Sidebar component', () => {
  it('should render as expected', async () => {
    const { getByTestId } = render(<Sidebar>test</Sidebar>);
    expect(getByTestId('sidebar')).toBeInTheDocument();
    expect(getByTestId('sidebar').textContent).toStrictEqual('test');
  });
});
