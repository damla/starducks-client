import { ReactElement, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export default function Sidebar({ children }: Props): ReactElement {
  return (
    <div data-testid="sidebar" className={styles.Container}>
      <div className={styles.Wrapper}>{children}</div>
    </div>
  );
}
