import { ReactElement } from 'react';
// import { useItem } from '../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

export default function Search(): ReactElement {
  // const { Items } = useItem();
  // console.log(Items);
  return (
    <div className={styles.Container}>
      <input className={styles.Input} type="search" placeholder="Search" />
    </div>
  );
}
