import { ReactElement, useState, useEffect } from 'react';
import { CoffeeItem } from '..';
import { useItem } from '../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

export default function CoffeeList(): ReactElement {
  const { loading, items, searchedItems } = useItem();
  const [listItems, setListItems] = useState(items);

  useEffect(() => {
    if (searchedItems.length > 0) {
      setListItems(searchedItems);
    } else {
      setListItems(items);
    }
  }, [items, searchedItems]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.Container}>
      {listItems.map((item) => {
        return <CoffeeItem key={`coffee-${item.id}`} coffee={item} />;
      })}
    </div>
  );
}
