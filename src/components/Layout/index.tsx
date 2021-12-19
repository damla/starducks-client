import { ReactElement, ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div data-testid="layout" className={styles.Container}>
      {children}
    </div>
  );
}
