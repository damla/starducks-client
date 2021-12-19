import { ReactElement } from 'react';
// import { useItem } from '../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

export default function Search(): ReactElement {
  // const { loading, items } = useItem();

  // if (loading) return <div>Loading...</div>;

  // console.log(items);
  return (
    <div className={styles.Container}>
      <input className={styles.Input} type="search" placeholder="Search" />
    </div>
  );
}
