import React from "react";
import Link from "next/link";

import { Cliente } from "../../domain/Cliente";

type Props = {
  data: Cliente;
};

const ListItem = ({ data }: Props) => (
  <Link href="/clients/[id]" as={`/clients/${data.razaoSocial}`}>
    <a>Razão Social: {data.razaoSocial}</a>
  </Link>
);

export default ListItem;
