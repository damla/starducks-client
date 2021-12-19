// import styles from "./styles.module.scss"
import {
  Layout,
  Sidebar,
  Main,
  FilterList,
  FilterItem,
  CoffeeList,
  Search,
} from '../../components';

export default function Home() {
  return (
    <Layout>
      <Sidebar>
        <Search />
        <FilterList>
          <FilterItem>All Coffees</FilterItem>
          <FilterItem>Hot</FilterItem>
          <FilterItem>Iced</FilterItem>
        </FilterList>
      </Sidebar>
      <Main>
        <CoffeeList />
      </Main>
    </Layout>
  );
}
