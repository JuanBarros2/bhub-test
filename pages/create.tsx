import { useRef } from "react";
import useCreateCliente from "../application/useCreateCliente/useCreateCliente";
import { Layout } from "../components";
import ClienteForm from "../components/ClienteForm/ClienteForm";

const CreatePage = () => {
  return (
    <Layout title="Criar cliente">
      <h1>Criar cliente</h1>
      <ClienteForm />
    </Layout>
  );
};

export default CreatePage;
