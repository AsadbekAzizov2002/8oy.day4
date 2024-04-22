import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
//   { Клиент: "firstName", Клиент: "First name", width: 130 },
  { field: "firstName", headerName: "Клиент", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", Ид_заказа: "5262261", firstName: "Jon", age: 35 },
  {
    id: 2,
    lastName: "Lannister",
    Ид_заказа: "5262261",
    firstName: "Cersei",
    age: 42,
  },
  {
    id: 3,
    lastName: "Lannister",
    Ид_заказа: "5262261",
    firstName: "Jaime",
    age: 45,
  },
  {
    id: 4,
    lastName: "Stark",
    Ид_заказа: "5262261",
    firstName: "Arya",
    age: 16,
  },
  {
    id: 5,
    lastName: "Targaryen",
    Ид_заказа: "5262261",
    firstName: "Daenerys",
    age: null,
  },
  {
    id: 6,
    lastName: "Melisandre",
    Ид_заказа: "5262261",
    firstName: null,
    age: 150,
  },
  {
    id: 7,
    lastName: "Clifford",
    Ид_заказа: "5262261",
    firstName: "Ferrara",
    age: 44,
  },
  {
    id: 8,
    lastName: "Frances",
    Ид_заказа: "5262261",
    firstName: "Rossini",
    age: 36,
  },
  {
    id: 9,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 10,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 11,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 12,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 13,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 14,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 15,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 16,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 17,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 18,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 19,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 20,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 20,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 21,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 22,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 23,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 24,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 25,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 26,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 27,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 28,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 29,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 30,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 31,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 33,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 34,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 35,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 36,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 37,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 38,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 38,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 39,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
  {
    id: 40,
    lastName: "Roxie",
    Ид_заказа: "5262261",
    firstName: "Harvey",
    age: 65,
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
