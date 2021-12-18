import { ReactElement } from 'react';
// import { useItem } from '../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

export default function Item(): ReactElement {
  // const { Items } = useItem();
  // console.log(Items);
  return (
    <div className={styles.Container}>
      <h2>Title</h2>
      <p>item description</p>
      <span>Ingredients&nbsp;</span>
      <span>Ingredient 1</span>
    </div>
  );
}
