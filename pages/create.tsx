import { Layout } from "../components";
import CreateClienteForm from "../components/CreateClienteForm/CreateClienteForm";

const CreatePage = () => {
  return (
    <Layout title="Criar cliente">
      <h1>Criar cliente</h1>
      <CreateClienteForm />
    </Layout>
  );
};

export default CreatePage;
