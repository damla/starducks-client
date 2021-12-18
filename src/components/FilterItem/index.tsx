import { ReactElement } from 'react';
// import { useItem } from '../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: string;
}

export default function FilterItem({ children }: Props): ReactElement {
  // const { Items } = useItem();
  // console.log(Items);

  return <li className={styles.Container}>{children}</li>;
}
