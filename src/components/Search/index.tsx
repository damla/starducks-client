import { ReactElement, useEffect, useState } from 'react';
import { useItem } from '../../contexts';
import styles from './styles.module.scss';

export default function Search(): ReactElement {
  const { updateSearchedItems } = useItem();
  const [searchField, setSearchField] = useState({ query: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchField({ query: event.target.value });
  };

  useEffect(() => {
    if (searchField.query.length > 150) {
      console.log('Input is not valid.');
      return;
    } else {
      updateSearchedItems(searchField);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchField]);

  return (
    <div className={styles.Container}>
      <input
        className={styles.Input}
        type="search"
        placeholder="Search"
        value={searchField.query}
        onChange={handleChange}
      />
    </div>
  );
}
