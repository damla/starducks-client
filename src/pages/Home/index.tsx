import { Layout, Sidebar, Main, FilterList, CoffeeList, Search } from '../../components';

export default function Home() {
  return (
    <Layout>
      <Sidebar>
        <Search />
        <FilterList />
      </Sidebar>
      <Main>
        <CoffeeList />
      </Main>
    </Layout>
  );
}
