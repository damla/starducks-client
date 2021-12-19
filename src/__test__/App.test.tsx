import { render } from '@testing-library/react';
// import App from '../App';
import { Sidebar } from '../components';

it('renders welcome message', () => {
  const { getByTestId } = render(<Sidebar>test</Sidebar>);
  expect(getByTestId('sidebar').textContent).toStrictEqual('test');
});
