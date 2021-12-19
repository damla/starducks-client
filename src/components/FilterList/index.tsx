import { ReactElement } from 'react';
import { FilterItem } from '..';
import { useFilter } from '../../contexts';
import styles from './styles.module.scss';

export default function FilterList(): ReactElement {
  const { filters } = useFilter();

  // const filters = {
  //   ALL: 'All Coffees',
  //   HOT: 'Hot',
  //   ICED: 'Iced',
  // };

  return (
    <div className={styles.Container} data-testid="filter-list">
      {filters.map((filter, i) => (
        <FilterItem key={`filter-${i}`} name={filter} />
      ))}
    </div>
  );
}
