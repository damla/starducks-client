// import styles from "./styles.module.scss"
import {
  Layout,
  Sidebar,
  Main,
  FilterList,
  FilterItem,
  CoffeeItem,
  CoffeeList,
  Search,
} from '../../components';

// interface Props {
//   sidebar: ReactNode;
//   main: ReactNode;
// }

export default function Home() {
  return (
    <Layout>
      <Sidebar>
        <Search />
        <FilterList>
          <FilterItem>Filter 1</FilterItem>
          <FilterItem>Filter 2</FilterItem>
          <FilterItem>Filter 3</FilterItem>
        </FilterList>
      </Sidebar>
      <Main>
        <CoffeeList>
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
        </CoffeeList>
      </Main>
    </Layout>
  );
}
