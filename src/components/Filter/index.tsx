import { ReactElement } from 'react';
import { useItem } from '../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: string;
}

export default function Filter({ children }: Props): ReactElement {
  // const { Items } = useItem();
  // console.log(Items);

  return (
    <div>
      <h3 className={styles.Header}>{children}</h3>
    </div>
  );
}
