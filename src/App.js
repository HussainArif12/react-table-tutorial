import "./styles.css";
import React from "react";
import SortedTable from "./SortedTable";
import FilterTable from "./FilterTable";
import ColumnFilter from "./ColumnFilter";
import PaginationTable from "./PaginationTable";
import TableWithAPI from "./TableWithAPI";

export default function App() {
  const cells = React.useMemo(
    () => [
      {
        company: "Alfred",
        contact: "Maria Anders",
        country: "Germany"
      },
      {
        company: "Centro comercial Moctezuma",
        contact: "Francisco Chang",
        country: "Mexico"
      },
      {
        company: "Ernst Handel",
        contact: "Roland Mendel	",
        country: "Austria"
      }
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Company",
        accessor: "company" // accessor is the "key" in the data
      },
      {
        Header: "Contact",
        accessor: "contact"
      },
      {
        Header: "Country",
        accessor: "country"
      }
    ],
    []
  );
  return (
    <div className="App">
      {/*   <PaginationTable columns={columns} data={cells} /> */}
      {<TableWithAPI />}
    </div>
  );
}
