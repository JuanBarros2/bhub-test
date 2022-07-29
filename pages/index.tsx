import { Layout } from "../components";
import List from "../components/List/List";

const IndexPage = () => {
  return (
    <Layout title="Home">
      <h1>BHub</h1>
      <List items={[]} />
    </Layout>
  );
};

export default IndexPage;
