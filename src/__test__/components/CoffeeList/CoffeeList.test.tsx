import { render } from '@testing-library/react';
import { CoffeeList } from '../../../components';

describe('Tests of CoffeeList component', () => {
  it('should render as expected', async () => {
    // const coffees = [
    //   {
    //     id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    //     title: 'Test Coffee',
    //     description: 'Test coffee description',
    //     category: 'Hot',
    //     ingredients: ['Espresso', 'Steamed Milk'],
    //     createdTime: '2020-05-01T00:00:00.000Z',
    //     updatedTime: '2020-05-01T00:00:00.000Z',
    //   },
    //   {
    //     id: '3fa85f64-5717-4562-b3fc-2c963f66afa7',
    //     title: 'Test Coffee 2',
    //     description: 'Test coffee description',
    //     category: 'All Coffees',
    //     ingredients: ['Espresso', 'Steamed Milk'],
    //     createdTime: '2020-05-01T00:00:00.000Z',
    //     updatedTime: '2020-05-01T00:00:00.000Z',
    //   },
    //   {
    //     id: '3fa85f64-5717-4562-b3fc-2c963f66afa8',
    //     title: 'Test Coffee 3',
    //     description: 'Test coffee description',
    //     category: 'Cold',
    //     ingredients: ['Espresso', 'Steamed Milk'],
    //     createdTime: '2020-05-01T00:00:00.000Z',
    //     updatedTime: '2020-05-01T00:00:00.000Z',
    //   },
    // ];

    const { getByTestId } = render(<CoffeeList />);
    expect(getByTestId('coffee-list')).toBeInTheDocument();
    expect(getByTestId('coffee-list').textContent).toStrictEqual('Loading...');

    // expect(getAllByTestId('coffee-item')).toHaveLength(1);
  });
});
