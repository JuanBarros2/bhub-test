import useCliente from "../application/useCliente/useCliente";
import { Layout } from "../components";
import List from "../components/List/List";

const IndexPage = () => {
  const { clientes, isLoading } = useCliente();
  return (
    <Layout title="Home">
      <h1>BHub</h1>
      {isLoading && <span>Carregando...</span>}
      {!isLoading && <List items={clientes} />}
    </Layout>
  );
};

export default IndexPage;
