import { ReactElement, ReactNode } from 'react';
// import { useItem } from '../../../contexts';
// import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export default function Sidebar({ children }: Props): ReactElement {
  // const { Items } = useItem();
  // console.log(Items);

  return (
    <div data-testid="sidebar" className={styles.Container}>
      <div className={styles.Wrapper}>
        <h3>Sidebar</h3>
        {children}
      </div>
    </div>
  );
}
