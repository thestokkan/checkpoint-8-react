import './Table.css';
import React from "react";

type TableProps = {
    id?: string;
    className?: "string";
    c1: string;
    c2: string;
    c3: string
}

const Table = ({id, className, c1, c2, c3}:TableProps) => {
  return (
      <table id={id} className={className}>
          <thead>
          <tr>
              <th>{c1}</th>
              <th>{c2}</th>
              <th>{c3}</th>
          </tr>
          </thead>
      </table>
  );
}

export default Table;