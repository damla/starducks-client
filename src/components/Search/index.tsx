import { ReactElement } from 'react';
// import { useItem } from '../../contexts';
// import cn from 'classnames';
// import styles from './styles.module.scss';

export default function Search(): ReactElement {
  // const { Items } = useItem();
  // console.log(Items);
  return (
    <div>
      <input type="search" placeholder="Search" />
    </div>
  );
}
