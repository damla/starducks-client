import { render } from '@testing-library/react';
import App from '../App';

it('App component test', () => {
  const { getAllByTestId, getByTestId } = render(<App />);
  expect(getByTestId('filter-list')).toBeInTheDocument();
  expect(getAllByTestId('filter-item')).toHaveLength(3);
  expect(getByTestId('layout')).toBeInTheDocument();
  expect(getByTestId('main')).toBeInTheDocument();
  expect(getByTestId('sidebar')).toBeInTheDocument();
  expect(getByTestId('search')).toBeInTheDocument();
});
