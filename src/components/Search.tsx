import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'desc', headerName: 'Description', width: 130 },
  { field: 'source', headerName: 'Source', width: 130 }
];

const rows = [
  { id: 1, desc: 'Tele2 IoT Sweden', source: 'Postpaid Gemalto'},
  { id: 2, desc: 'Tele2 IoT Euro', source: 'Subman Idemia'},
];

function Search() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Search;