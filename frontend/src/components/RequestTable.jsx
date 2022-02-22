import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

import Admin from "./Admin";


const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "fullName",
    headerName: "FULLNAME",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "degreeType",
    headerName: "DEGREE TYPE",
    width: 170,
    sortable: false,
  },
  {
    field: "programOfStudy",
    headerName: "PROGRAM OF STUDY",
    width: 220,
    sortable: false,
  },
  {
    field: "mailingAgent",
    headerName: "MAILING AGENT",
    width: 180,
    sortable: false,
  },
  { field: "progress", headerName: "PROGRESS", width: 170, sortable: false },
  {
    field: "viewMore",
    headerName: "",
    width: 150,
    sortable: false,
    renderCell: (cellValues) => {
      return (
        <Button variant="contained" color="primary">
          View More
        </Button>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function RequestTab() {
  return (
    <div>
      <Admin />
      <div style={{ height: 500, width: "100%", marginTop: "30px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
        />
      </div>
    </div>
  );
}
