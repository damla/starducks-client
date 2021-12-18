// import styles from "./styles.module.scss"
import { Layout, Sidebar, Main, Filter, Item, List, Search } from '../../components';

// interface Props {
//   sidebar: ReactNode;
//   main: ReactNode;
// }

export default function Home() {
  return (
    <Layout>
      <Sidebar>
        <Search />
        <List>
          <Filter>Filter 1</Filter>
          <Filter>Filter 2</Filter>
          <Filter>Filter 3</Filter>
        </List>
      </Sidebar>
      <Main>
        <List>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </List>
      </Main>
    </Layout>
  );
}
