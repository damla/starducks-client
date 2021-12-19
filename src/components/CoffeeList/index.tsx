import { ReactElement, useState, useEffect } from 'react';
import { CoffeeItem } from '..';
import { useFilter, useItem } from '../../contexts';
import { Items } from '../../interfaces';
import styles from './styles.module.scss';

export default function CoffeeList(): ReactElement {
  const { loading, items, searchedItems } = useItem();
  const { selectedFilter } = useFilter();
  const [listItems, setListItems] = useState(items);

  useEffect(() => {
    if (searchedItems.length > 0) {
      setListItems(searchedItems);
    } else {
      let filteredData: Items = [];
      switch (selectedFilter) {
        case 'Hot':
          filteredData = items.filter(
            (item) => item.category.toUpperCase() === selectedFilter.toUpperCase(),
          );
          break;
        case 'Iced':
          filteredData = items.filter(
            (item) => item.category.toUpperCase() === selectedFilter.toUpperCase(),
          );
          break;
        default:
          filteredData = items;
          break;
      }
      setListItems(filteredData);
    }
  }, [items, searchedItems, selectedFilter]);

  if (loading) return <div data-testid="coffee-list">Loading...</div>;

  return (
    <div data-testid="coffee-list" className={styles.Container}>
      {listItems.map((item) => {
        return <CoffeeItem key={`coffee-${item.id}`} coffee={item} />;
      })}
    </div>
  );
}
