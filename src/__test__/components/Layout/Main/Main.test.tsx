import { render } from '@testing-library/react';
import { Main } from '../../../../components';

describe('Tests of Main component', () => {
  it('should render as expected', async () => {
    const { getByTestId } = render(<Main>test</Main>);
    expect(getByTestId('main')).toBeInTheDocument();
    expect(getByTestId('main').textContent).toStrictEqual('test');
  });
});
