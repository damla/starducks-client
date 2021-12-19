import { ReactElement, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export default function Main({ children }: Props): ReactElement {
  return (
    <div data-testid="main" className={styles.Container}>
      {children}
    </div>
  );
}
