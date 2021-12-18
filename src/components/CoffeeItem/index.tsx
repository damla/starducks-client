import { ReactElement } from 'react';
// import { useItem } from '../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

export default function CoffeeItem(): ReactElement {
  // const { Items } = useItem();
  // console.log(Items);
  return (
    <div className={styles.Container}>
      <h2 className={styles.Header}>Title</h2>
      <p className={styles.Description}>
        Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served
        warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe
        noir.
      </p>
      <div className={styles.Footer}>
        <span>Ingredients:&nbsp;</span>
        <span>Ingredient 1</span>
      </div>
    </div>
  );
}
