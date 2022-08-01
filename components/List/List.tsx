import * as React from "react";
import ListItem from "../ListItem/ListItem";
import { Cliente } from "../../domain/Cliente";

type Props = {
  items: Cliente[];
};

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.razaoSocial}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
