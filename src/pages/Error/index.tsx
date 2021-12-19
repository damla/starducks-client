import styles from './styles.module.scss';
import { ReactComponent as SadDuck } from '../../assets/SVGs/sad-duck.svg';
import { Layout, Sidebar, Main, FilterList, Search } from '../../components';

export default function Error() {
  return (
    <Layout>
      <Sidebar>
        <Search />
        <FilterList />
      </Sidebar>
      <Main>
        <div className={styles.Container}>
          <SadDuck width={300} className={styles.SVG} />
          <h3 className={styles.ErrorText}>Bad Request :(</h3>
        </div>
      </Main>
    </Layout>
  );
}
