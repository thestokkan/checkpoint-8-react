import React from "react";
import "./Table.css";

type PlayerTableProps = {
    headers: React.ReactNode[];
    rows: React.ReactNode[][];
};

const Table = ({ headers, rows }: PlayerTableProps) => {
    return (
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => {
                    return <th key={index}>{header}</th>;
                })}
            </tr>
            </thead>
            <tbody>
            {rows.map((row, index) => {
                return (
                    <tr key={index}>
                        {row.map((da) => {
                            return <td>{da}</td>;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default Table;