import { ReactElement } from 'react';
import { CoffeeItem } from '..';
import { useItem } from '../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

export default function CoffeeList(): ReactElement {
  const { loading, items } = useItem();

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.Container}>
      {items.map((item) => {
        return <CoffeeItem key={`coffee-${item.id}`} coffee={item} />;
      })}
    </div>
  );
}
