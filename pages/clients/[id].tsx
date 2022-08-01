import { GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "../../components";
import ListDetail from "../../components/ListDetail/ListDetail";
import { Cliente } from "../../domain/Cliente";
import InterfaceFactory from "../../factory/InterfaceFactory";

type Props = {
  cliente?: Cliente;
  errors?: string;
};

const StaticPropsDetail = ({ cliente, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error">
        <p>
          <span style={{ color: "red" }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${cliente ? cliente.razaoSocial : "Detalhe de Cliente"} `}>
      {cliente && <ListDetail cliente={cliente} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const clientes = await InterfaceFactory.getRemoteApiService().getClientes();
  const paths = clientes.map((cliente) => ({
    params: { id: cliente.razaoSocial.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const clientes = await InterfaceFactory.getRemoteApiService().getClientes();
    const razaoSocial = params?.id;
    const cliente = clientes.find((data) => data.razaoSocial === razaoSocial);
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { cliente } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
