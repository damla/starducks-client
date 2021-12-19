import { render } from '@testing-library/react';
import { CoffeeItem } from '../../../components';

describe('Tests of CoffeeItem component', () => {
  it('should render as expected', () => {
    const coffee = {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'Test Coffee',
      description: 'Test coffee description',
      category: 'Hot',
      ingredients: ['Espresso', 'Steamed Milk'],
      createdTime: '2020-05-01T00:00:00.000Z',
      updatedTime: '2020-05-01T00:00:00.000Z',
    };

    const { getAllByTestId, getByTestId } = render(<CoffeeItem coffee={coffee} />);

    expect(getByTestId('coffee-item')).toBeInTheDocument();
    expect(getByTestId('coffee-item-title').textContent).toStrictEqual(coffee.title);
    expect(getByTestId('coffee-item-description').textContent).toStrictEqual(coffee.description);
    expect(getAllByTestId('coffee-item-ingredient')).toHaveLength(2);
  });
});
