import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./styles.css";
import type { LabelledValue } from "../../types";

interface ListProps<T> {
  items: LabelledValue<T>[];
}

const List = <T,>(props: ListProps<T>) => {
  const { items } = props;
  return (
    <>
      {items.map((item) => (
        <div className="list-card" key={uuidv4()}>
          <h2 className="list-label">{item.label} :</h2>
          <div className="list-value">{String(item.value)}</div>
        </div>
      ))}
    </>
  );
};

export default List;
