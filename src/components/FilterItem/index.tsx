import { ReactElement } from 'react';
import { useFilter } from '../../contexts';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  name: string;
}

export default function FilterItem({ name }: Props): ReactElement {
  const { selectedFilter, setSelectedFilter } = useFilter();

  return (
    <button
      data-testid="filter-item"
      className={cn(styles.Container, selectedFilter === name && styles.Active)}
      onClick={() => setSelectedFilter(name)}
    >
      {name}
    </button>
  );
}
